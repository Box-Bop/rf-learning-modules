# rf-learning-modules


## How to run this app

```
npm i

docker-compose up
```

The app will start running on port 3002  
Some test data is already provided on app launch (see [insertSampleData](https://github.com/Box-Bop/rf-learning-modules/blob/597b20e9a92151ac69f66a365d7edee4dbe3efc7/database/queries.js#LL4C25-L4C25)), additional data can be added manually by connecting to the [database](https://github.com/Box-Bop/rf-learning-modules/blob/597b20e9a92151ac69f66a365d7edee4dbe3efc7/database/index.js#L15).
<br></br>
### **Available endpoints:**

* `/getModulesByCategoryName/:category`  
	search for modules by quering the category name
* `/getPopularModules`  
	returns the top 10 modules used in the last month  

## Run tests by using `npm test`  

### Here's the DB structure:
![image](https://github.com/Box-Bop/rf-learning-modules/assets/33263090/094c85f1-c2c5-4a6b-9c12-c51c18bbd5cb)
