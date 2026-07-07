const baseURL = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "Multi-Spatiotemporal Digital Twin Framework for Campus Management",
    subtitle: "Final Year Design Project · Team Leader · Rector’s Gold Medal for Best Project",
    summary:
      "A GIS-BIM digital twin framework integrating terrain, buildings, spatial data, 3D visualization, and urban analysis for campus-scale management.",
    year: "2026",
    coords: "Campus / Digital Twin",
    categories: [
      "Digital Twins & 3D GIS",
      "WebGIS & Spatial Databases",
      "Urban Analytics & Planning",
    ],
    tools: [
      "Revit",
      "ArcGIS/QGIS",
      "Metashape/COLMAP",
      "Cesium",
      "Unity",
      "PostgreSQL/PostGIS",
    ],
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    video: `${baseURL}Images/internal/digital-twin.MP4`,
    poster: `${baseURL}Images/internal/digital-twin-poster.webp`,
    aim:
      "To develop a GIS-BIM based digital twin that integrates terrain, buildings, and spatial data for 3D visualization and urban analysis.",
    methodology:
      "Terrain was generated from photogrammetry/elevation data and prepared as a 3D surface model. BIM/building models were created, cleaned, optimized, and aligned with the terrain for integration into the digital twin environment.",
    contribution:
      "I worked on BIM modelling and terrain preparation, including building geometry creation, terrain surface generation, scale checking, model optimization, and integration of 3D assets with GIS layers.",
    output:
      "A spatially aligned 3D digital twin environment showing terrain, buildings, and urban context, supporting visualization and further simulations such as runoff and infrastructure analysis.",
    learning:
      "Gained hands-on experience in GIS-BIM integration, terrain modelling, 3D asset preparation, digital twin workflows, and performance optimization for real-time visualization.",
  },
  {
    title: "Photogrammetry & BIM Integration for 3D As-Built Modelling",
    subtitle: "3D reconstruction workflow integrating photogrammetry outputs with BIM environment",
    summary:
      "A photogrammetry-to-BIM workflow showing how image-based 3D reconstruction can support as-built modelling, visualization, and BIM integration.",
    year: "2024",
    coords: "Photogrammetry / BIM",
    categories: ["Digital Twins & 3D GIS"],
    tools: [
      "Agisoft Metashape",
      "Autodesk Revit",
      "Photogrammetry",
      "Point Cloud Processing",
      "OBJ/FBX",
      "3D Mesh Modelling",
    ],
    src: `${baseURL}Images/Photogrammetry_cover_pic.webp`,
    modalSrc: `${baseURL}Images/internal/agisoft.webp`,
    aim:
      "To explore how photogrammetry and Building Information Modelling can be integrated to create accurate 3D as-built representations for visualization, construction documentation, and project analysis.",
    methodology:
      "Captured overlapping photographs of the selected building/site from multiple angles and processed them in Agisoft Metashape to generate a 3D point cloud and textured 3D model. The model was cleaned, exported into a compatible 3D format such as OBJ/FBX, and imported into Autodesk Revit. Reference points and coordinate adjustments were used to align the photogrammetry-derived model within the BIM environment.",
    contribution:
      "I worked on the photogrammetry-to-BIM workflow, including understanding image capture requirements, processing the 3D model workflow, preparing the model for export, studying Revit integration steps, and documenting how photogrammetry outputs can support BIM-based visualization and as-built modelling.",
    output:
      "Produced a workflow demonstrating how photogrammetry-based 3D models can be converted, cleaned, aligned, and integrated into a BIM environment for improved visualization, accuracy, and construction/project understanding.",
    learning:
      "Gained hands-on understanding of photogrammetry, point-cloud generation, 3D mesh preparation, BIM integration, model alignment, coordinate adjustment, and the practical limitations of photogrammetry-to-BIM workflows such as data quality, processing time, hardware requirements, and alignment challenges.",
  },
  {
    title: "Grid-Based Intra-Urban Spatial Inequality Assessment",
    subtitle: "GIS-based urban deprivation analysis across 94 grid cells in Nowshera",
    summary:
      "A grid-based urban analysis project measuring spatial inequality, deprivation, and service-access gaps using multi-source geospatial indicators.",
    year: "2026",
    coords: "Nowshera / 94 grids",
    categories: [
      "Urban Analytics & Planning",
      "Remote Sensing & Earth Observation",
    ],
    tools: [
      "ArcGIS Pro",
      "Python",
      "WorldPop",
      "OSM",
      "VIIRS Night-Time Lights",
      "Sentinel-2 NDVI",
    ],
    src: `${baseURL}Images/urban_inequality_coverrr_pic.webp`,
    modalSrc: `${baseURL}Images/internal/Urban_Inequality/road_density.jpg`,
    gallery: [
      `${baseURL}Images/internal/Urban_Inequality/accessibility.jpg`,
      `${baseURL}Images/internal/Urban_Inequality/Layout4.jpg`,
      `${baseURL}Images/internal/Urban_Inequality/road_density.jpg`,
      `${baseURL}Images/internal/Urban_Inequality/LISSSSSSSS.drawio-1.webp`,
    ],
    aim:
      "To identify spatial inequality and service gaps across 94 grid cells in Nowshera using GIS-based urban deprivation analysis.",
    methodology:
      "Created a 200m × 200m grid and calculated 8 indicators, including population density, road access, school/healthcare availability, hospital distance, NDVI, and night-time light intensity. These were normalized and combined into a Composite Inequality Index and Relative Deprivation Index.",
    contribution:
      "I processed multi-source spatial datasets, calculated grid-level indicators in ArcGIS Pro/Python, built the inequality index, and prepared thematic maps showing deprived and underserved areas.",
    output:
      "Generated inequality and deprivation maps highlighting infrastructure and service-access gaps across Behram Khan Khel, Dheri Khel, and Shahmeer Garhi.",
    learning:
      "Improved skills in grid-based GIS analysis, spatial indicators, multi-criteria evaluation, urban inequality mapping, and planning-focused geospatial decision support.",
  },
  {
    title: "Hydrological Forecasting & Flood-Risk Decision Support",
    subtitle: "ML pipeline for next-day river discharge prediction and flood-risk classification",
    summary:
      "A data-driven hydrological forecasting pipeline that predicts next-day river discharge and converts outputs into flood-risk decision classes.",
    year: "2026",
    coords: "USGS / NASA POWER",
    categories: [
      "Climate, Hydrology & Disaster Risk",
      "Geospatial AI/ML",
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
      "USGS Daily Values API",
      "NASA POWER API",
    ],
    src: `${baseURL}Images/River_discharge_cover_pic.webp`,
    modalSrc: `${baseURL}Images/internal/river_discharge_ML.png`,
    aim:
      "To build a data-driven forecasting pipeline that predicts next-day river discharge and converts the prediction into flood/high-flow risk classes for early-warning decision support.",
    methodology:
      "Integrated USGS river discharge data with NASA POWER rainfall and temperature data. Cleaned invalid values, aligned both datasets by date, and engineered hydrology-based features including discharge lags, rainfall lags, temperature, and seasonal month indicators. Compared Linear Regression, SVR, and Random Forest using a temporal train-test split to avoid data leakage. Random Forest was selected after model comparison and tuning because it captured non-linear rainfall–discharge patterns better.",
    contribution:
      "I developed the complete ML workflow, from API-based data collection and preprocessing to feature engineering, model training, evaluation, and flood-risk classification. I also transformed continuous discharge predictions into practical risk categories using percentile-based thresholds, making the model useful for decision-making rather than only numerical prediction.",
    output:
      "The final model predicted next-day river discharge with a 1.4% error in post-hoc validation and achieved 85% flood-risk classification accuracy with a 0.72 F1-score. The project produced both regression outputs and flood/high-flow risk labels to support early-warning ranking and hydrological risk assessment.",
    learning:
      "Gained hands-on experience in time-series forecasting, hydrological feature engineering, API-based environmental data integration, temporal validation, model comparison, and converting ML predictions into decision-support indicators for flood risk management.",
  },
  {
    title: "Fleet Management GIS Platform",
    subtitle: "Full-stack WebGIS platform for fleet tracking, routes, and logistics monitoring",
    summary:
      "A full-stack WebGIS platform for vehicle tracking, route visualization, spatial querying, logistics monitoring, and operational decision support.",
    year: "2026",
    coords: "WebGIS / Logistics",
    categories: ["WebGIS & Spatial Databases"],
    tools: [
      "PostgreSQL/PostGIS",
      "MapServer",
      "React",
      "Leaflet",
      "Node.js/REST APIs",
      "WMS/WFS",
      "LLM Integration",
    ],
    src: `${baseURL}Images/Fleet_management_cover_picture.webp`,
    modalSrc: `${baseURL}Images/internal/Fleet_management.jpeg`,
    aim:
      "To build a full-stack Web GIS platform for fleet tracking, route visualization, logistics monitoring, and spatial decision support.",
    methodology:
      "Designed a spatial database in PostGIS to store vehicle, route, and logistics data. Published geospatial layers through MapServer using WMS/WFS services and connected them with a React-Leaflet frontend. REST APIs were used to retrieve, filter, and query operational data from the backend.",
    contribution:
      "I worked on the GIS database structure, map layer integration with WFS and WMS, frontend map visualization, and API-based connection between PostGIS and the web interface.",
    output:
      "Developed an interactive fleet management platform where vehicles, routes, and logistics information could be visualized and queried on a map. The system supported spatial search, route-based analysis, and database-driven logistics insights.",
    learning:
      "Gained practical experience in full-stack Web GIS development, spatial databases, OGC map services, REST API integration, interactive mapping, and applying LLMs for natural language access to geospatial/logistics data.",
  },
  {
    title: "Spatio-Temporal LULC Change Detection & Future Prediction",
    subtitle:
      "Multi-temporal land-cover mapping and prediction using Google Earth Engine",
    summary:
      "A remote-sensing project for detecting land-cover change across Pakistan using Landsat-8, Sentinel-2, and supervised classification in Google Earth Engine.",
    year: "2026",
    coords: "Pakistan / 2016–2024",
    categories: [
      "Remote Sensing & Earth Observation",
      "Geospatial AI/ML",
    ],
    tools: [
      "Google Earth Engine",
      "Random Forest",
      "CART",
      "Landsat-8",
      "Sentinel-2",
      "Accuracy Assessment",
    ],
    src: `${baseURL}Images/LULC_COVER_PIC.webp`,
    aim:
      "To perform multi-temporal Land Use/Land Cover change detection for Pakistan and support future land-cover prediction using satellite imagery and supervised classification.",
    methodology:
      "Used Landsat-8 and Sentinel-2 imagery from 2016–2024 at 30m resolution. Implemented supervised classification workflows using Smile Random Forest and CART classifiers in Google Earth Engine across six land-cover classes. Performed accuracy assessment using Overall Accuracy and Kappa Coefficient metrics.",
    contribution:
      "I built the Google Earth Engine classification workflow, selected multi-temporal satellite imagery, prepared training/testing samples, implemented Random Forest and CART classification, and evaluated classification performance.",
    output:
      "Generated multi-year LULC maps showing spatial land-cover changes across Pakistan and validated the classification/prediction workflow using accuracy metrics.",
    learning:
      "Improved skills in Google Earth Engine, supervised classification, multi-temporal remote sensing, LULC mapping, model validation, and spatial change analysis.",
  },
  {
    title: "MODIS LST Processing Pipeline",
    subtitle:
      "Automated remote-sensing ETL pipeline for MODIS land surface temperature products",
    summary:
      "An automated Python and GDAL pipeline for downloading, processing, QA-filtering, and exporting MODIS Land Surface Temperature raster products.",
    year: "2026",
    coords: "MODIS / Raster ETL",
    categories: [
      "Remote Sensing & Earth Observation",
      "Climate, Hydrology & Disaster Risk",
    ],
    tools: ["Python", "GDAL", "MODIS", "USGS API", "Raster Processing", "GeoTIFF"],
    src: `${baseURL}Images/LST_COVER_PIC.webp`,
    modalSrc: `${baseURL}Images/LST_COVER_PIC.webp`,
    aim:
      "To build an automated geospatial ETL pipeline for downloading, processing, and QA-filtering MODIS HDF imagery for environmental monitoring workflows.",
    methodology:
      "Used Python and GDAL to download MODIS HDF imagery, extract Land Surface Temperature bands, apply QA filtering, and convert processed outputs into GeoTIFF raster products.",
    contribution:
      "I developed the automated processing workflow, handled HDF raster extraction, performed quality-control filtering, converted LST values, and generated analysis-ready GeoTIFF outputs.",
    output:
      "Produced cleaned and processed LST raster products suitable for environmental monitoring, urban heat analysis, and climate-related geospatial workflows.",
    learning:
      "Gained practical experience in satellite raster preprocessing, MODIS data handling, GDAL automation, QA filtering, HDF-to-GeoTIFF conversion, and remote-sensing ETL pipeline development.",
  },
  {
    title: "Disaster Response GIS System",
    subtitle:
      "PostGIS and pgRouting-based system for emergency facility selection and safe-route planning",
    summary:
      "A spatial decision-support system integrating hospitals, hazard zones, blocked roads, and emergency facilities for disaster-response planning.",
    year: "2026",
    coords: "PostGIS / pgRouting",
    categories: [
      "Climate, Hydrology & Disaster Risk",
      "WebGIS & Spatial Databases",
    ],
    tools: ["PostGIS", "pgRouting", "QGIS", "SQL"],
    src: `${baseURL}Images/disaster_response_cover_pic.webp`,
    modalSrc: `${baseURL}Images/disaster_response_cover_pic.webp`,
    aim:
      "To design a spatial decision-support system for disaster-response planning using hazard zones, hospitals, blocked roads, and emergency facilities.",
    methodology:
      "Designed a PostGIS spatial database integrating hospitals, hazard zones, blocked roads, and emergency facilities. Implemented nearest-neighbor spatial SQL queries and pgRouting shortest-path analysis for emergency facility selection and safe-route generation.",
    contribution:
      "I designed the spatial database structure, wrote spatial SQL queries, implemented pgRouting workflows, and visualized response scenarios in QGIS.",
    output:
      "Created a GIS-based disaster-response system supporting emergency facility selection, safe-route generation, and scenario visualization.",
    learning:
      "Gained practical experience in spatial databases, network analysis, pgRouting, nearest-neighbor queries, emergency planning workflows, and operational GIS decision support.",
  },
];