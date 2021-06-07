#!/bin/bash
if [ $1 == "--init-dev" ]; then
    echo "Starting Development Environment Moving Containers Down..."
    echo "Deconstructing containers, if any..."
    scriptdir=`dirname "$BASH_SOURCE"`
    docker-compose -f $scriptdir/docker-compose.yml down
    scriptdir=`dirname "$BASH_SOURCE"`
    echo "Building development containers..."
    docker-compose -f $scriptdir/docker-compose.yml up -d --build
fi
if [ $1 == "--dev" ]; then
    echo "Deploying in development environment"
    
    echo "Building development containers "
    scriptdir=`dirname "$BASH_SOURCE"`
    docker-compose -f $scriptdir/docker-compose.yml up -d --build
fi