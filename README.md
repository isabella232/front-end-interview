# Front-end interview task

The challenge consists of 3 small tasks.
They could be done separately and it's not necessary to implement all of them.
However, you are encouraged to do as much as possible during the 2-3 hours interview period.

Good luck and amaze us with your skills!

### Task 1 - Data filtering

Please replace the dummy values in the [data-provider.js]() file with real values taken from the [ins.data]() json file.

There are 3 functions:
* getCountries() -  should return an array of unique countries
* getCamps(country) -  should return an array of camps located in the given country
* getLessonsByYear(country) -  should return two arrays, one that contains unique years and the second
 with the total number of lessons in the country by the year

### Task 2 - Data binding

Please connect the data to the UI components located in the [Ins.vue]() file:
* The "Countries" combo should be populated with the results from the `getCountries()` function.
* The "Camps" combo should be populated with the results from the `getCamps(country)` function.
* The chart should be populated with the results from the `getLessonsByYear(country)` function.


### Task 3 - Data filtering

Please style the chart (`<line-chart></line-chart>`) in the [Ins.vue]() according to the attached design:

![design](https://github.com/jakub-wojciechowski/front-end-interview/blob/master/public/ins-chart-design.png)



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

