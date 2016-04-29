# Create Training Data Set Examples
This repository contains example code and configuration files to create training data sets from annotated Whlole Slide Imaging using Simagis Live Image Acess API

## Overview
Using These examples you can quickly create training data sets for machine learning algorithms from annotated whole slide images, from any slide format (vendor) 

In these examples a Java utility program is using configuration file in JavaScript to access Simagis Live server via Image Access API and exatract image tiles from annotated areas on whole slide images. To learn more about annotating slides for training see quick reference at http://bit.ly/sit-ml-quick-reference

The result is a zip file that contains folder for each label with image tiles for that label.  This is common data structure for many machine learning software applications. Alternatively, you can generate results where image data is stored is csv file, one line per image, this is another popular input format for deep learning convolutional networks. 

NOTE: These examples cover only basic functionality available via Image Access API, for details and questions, contact development team at contact@simagis.com

## Prerequisites
Recent version of Java on your computer

## Installation
Download and unzip compiled Java code from Releases section of this repository to your local folder
Download configuration files: make_training_data_areas.js; make_training_data_points.js

## Start
Drug and drop configuration JavaScript file to dataset-builder.cmd. you will see execution log window and output zip file will be created in the target directory
