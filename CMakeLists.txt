cmake_minimum_required(VERSION 3.16)
project(mjfuzz VERSION 0.1.0)

include(CMake/CPM.cmake)

#Compile commands, useful for some IDEs like VS-Code
set(CMAKE_EXPORT_COMPILE_COMMANDS TRUE)

#Minimum MacOS target, set globally
set(CMAKE_OSX_DEPLOYMENT_TARGET "10.9" CACHE STRING "Minimum OS X deployment version" FORCE)

option(UniversalBinary "Build universal binary for mac" OFF)

if (UniversalBinary)
    set(CMAKE_OSX_ARCHITECTURES "x86_64;arm64" CACHE INTERNAL "")
endif()

#static linking in Windows
set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")

#Adds all the module sources so they appear correctly in the IDE
set_property(GLOBAL PROPERTY USE_FOLDERS YES)
option(JUCE_ENABLE_MODULE_SOURCE_GROUPS "Enable Module Source Groups" ON)

# Change this option to ON if you want to build the AudioPluginHost for example
# (practical to debug the plugin processor directly from your IDE)
option(JUCE_BUILD_EXTRAS "Build JUCE Extras" OFF)
option(JUCE_BUILD_EXAMPLES "Build JUCE Examples" OFF)

CPMAddPackage(
        NAME JUCE
        GITHUB_REPOSITORY juce-framework/JUCE
        GIT_TAG 6.1.1)

CPMAddPackage(
        NAME react_juce
        GITHUB_REPOSITORY nick-thompson/react-juce 
        GIT_TAG origin/master
        DOWNLOAD_ONLY YES)

# Adding any custom modules you might have:
juce_add_module(${react_juce_SOURCE_DIR}/react_juce)

# Add DUKTAPE
target_compile_definitions(
    react_juce
    INTERFACE
    REACTJUCE_USE_DUKTAPE=1
)

# If you want to create new projects, you can init them in the examples folder
# and add them here with the add_subdirectory command
add_subdirectory(src)
