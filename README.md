# Poverty Conqueror
Poverty Conqueror —— Call For Code 2021


## What is Poverty Conqueror? ##
Poverty Conqueror is a smart recommendation website for poverty alleviation programs, which provides effective poverty alleviation programs in line with local conditions for towns or families in poverty-stricken areas. People in poverty-stricken areas, the road to poverty alleviation is hindered by the lack of a clear development direction, no source of start-up funds, and lack of technical means. Based on China's poverty alleviation experience, Poverty Conqueror uses data analysis, machine learning, data cloud and other technologies to provide unique poverty alleviation solutions for poverty-stricken areas around the world, solve poverty problems, and achieve sustainable development.



## Contents

01. [Short Description](#Short-Description)
01. [Long Description](#Long-Description)
02. [Demo Video](#Demo-Video)
02. [Demo Web](#Demo-Web)

[comment]: <> (03. [How it works]&#40;#How-it-works&#41;)

[comment]: <> (06. [Project Roadmap]&#40;#Project-Roadmap&#41;)
07. [Getting Started](#Getting-Started)
08. [IBM Cloud Services](#IBM-Cloud-Services)
10. [Authors](#Authors)

## Short Description <a name="Short-Description"></a>

### What's the problem?
On September 25-27, 2015, 193 member states unanimously adopted "Transforming our World: The 2030 Agenda for Sustainable Development" at the United Nations Sustainable Development Summit with 17 sustainable development goals as the core. The three levels: society, economy, and environment, as well as important aspects related to peace, disputes and university institutions, and confirm the mobilization of implementation means, including financial resources, technology development and transfer, and capacity building. The agenda was officially launched on January 1, 2016, calling on all countries to take action to achieve 17 sustainable development goals in the next 15 years. As the largest developing country in the world, China has already achieved a complete alleviation of poverty through a variety of different programs. However, there are still 1.3 billion people living in multidimensional poverty in other parts of the world, accompanied by multiple problems such as hunger, high disease rates, and low education levels. The problem of poverty has become an important factor restricting human development.

## Long Description <a name="Long-Description"></a>
[Long Description Document Link](https://github.com/long122021/Poverty-Conqueror/blob/main/PovertyConqueror.pptx)

### How can technology help?

* Information database of impoverished areas：Enter the area to match the basic characteristics of the area, including 8 dimensions such as climate, altitude, topography, soil quality, and annual precipitation.
* Recommendations for poverty alleviation programs：Including industry recommendations, references to successful cases of poverty alleviation in China, and recommendations from service support organizations.
* Information platform：The help-seeking party releases help-seeking information, and the assisting party releases poverty alleviation information to establish a communication channel for the help-seeking party and the donor in the development of poverty alleviation.



## Demo Video <a name="Demo-Video"></a>
[![Demo Video](https://github.com/long122021/Poverty-Conqueror/blob/main/cover.png?raw=ture)](https://www.youtube.com/watch?v=UYTDi53BQrs "DEMO VIDEO")

## Demo Web <a name="Demo-Web"></a>
![picture alt](https://github.com/long122021/Poverty-Conqueror/blob/main/1.png?raw=true)
![picture alt](https://github.com/long122021/Poverty-Conqueror/blob/main/2.png?raw=true)
![picture alt](https://github.com/long122021/Poverty-Conqueror/blob/main/3.png?raw=true)
![picture alt](https://github.com/long122021/Poverty-Conqueror/blob/main/4.png?raw=true)

[comment]: <> (## How it works <a name="How-it-works"></a>)

[comment]: <> (![picture alt]&#40;https://github.com/long122021/Water-Assistant/blob/main/Architecture.png?raw=true&#41;)

[comment]: <> (1. We use IoT water quality monitoring equipment to monitor water source information, and then store the data in the Cloudant database. IoT Plantform manages these devices so as to generate the water source map on Water Assistant.)

[comment]: <> (2. To analyze the relationship between weather and water resources，we use 4 weather-related indicators of temperature, humidity, wind speed, and rainfall  as independent variables, water quality level and water level as dependent variables. IBM Cloud Pak for Data is used to clean and process historical data, and IBM Machine Learning is used to train the processed data to get the machine learning model. We select multiple machine learning models, such as decision tree, XGBoost, random forest, linear regression and so on. Machine Learning service automatically performs feature engineering, and comprehensively considers running time, accuracy and other indicators of different models to select the best. Finally, the weather data obtained from The Weather Company is applied on the best model to predict water quality and water depth in the future.)

[comment]: <> (3. Constructing a chatting rebot based on Watson Assistant to provide users with self-service inquiries about water source information and water utilization related knowledge and skills.)


[comment]: <> (## Project Roadmap <a name="Project-Roadmap"></a>)

[comment]: <> (<div  align="center">    )

[comment]: <> (<img src="https://github.com/long122021/Water-Assistant/blob/main/Roadmap.png?raw=true" width="50%" height="50%">)

[comment]: <> (</div>)

[comment]: <> (* In the first stage, we focused on using the Internet of Things technology to monitor water quality and water depth, build a water source map, and provide users with the possibility to view water source information at any time.)

[comment]: <> (* In the second stage, we pay attention to train models predicting water source changes, provide users with water quality and water depth trends, and propose countermeasures to deal with water-related problems.)

[comment]: <> (* In the third stage, we improve the chatting robot to realize self-service query of the nearest clean water source and navigate to it. According to users’  needs, we recommend water resources utilization schemes such as agricultural irrigation and animal husbandry.)

## Getting Started <a name="Getting-Started"></a>

#### Prerequisite
* Register for an [IBM Cloud account](https://www.ibm.com/account/reg/us-en/signup?formid=urx-42793&eventid=cfc-2020).
* Request a [Weather Company API key](https://callforcode.weather.com/)

#### Run it
* Download the Github code
* Install node.js
* After deploying the nodejs service, enter the NodejsExpress folder and start server.js
* Enter the Ngix folder to start ngix

## IBM Cloud Services <a name="IBM-Cloud-Services"></a>
* [IBM Watson Studio](https://www.ibm.com/cloud/watson-studio)
* [IBM Cloud Pak For Data](https://www.ibm.com/products/cloud-pak-for-data)
* [The Weather Company API](https://callforcode.weather.com/)
* [Environmental Intelligence Suite](https://www.ibm.com/products/environmental-intelligence-suite)


## Authors <a name="Authors"></a>
* Mingwei Zhang：Creative Analyst, System Designer
* Mengqi Cai：Product and software developers
* Yaoyang Liu：Product and software developers
* Xiaoming Yang：Artificial intelligence engineer
* Tianhao Wang：Web developer，UI designer

