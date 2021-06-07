#!/bin/bash
if [ $1 == "--init-dev" ]; then
    echo "Starting Development Environment Moving Containers Down..."
    echo "Deconstructing containers, if any..."
    docker-compose -f $(pwd)/docker-compose.yml down
    echo "Building development containers..."
    docker-compose -f $(pwd)/docker-compose.yml up -d --build
fi
if [ $1 == "--dev" ]; then
    echo "Deploying in development environment"
    
    echo "Building development containers "
    docker-compose -f $(pwd)/docker-compose.yml up -d --build
fi