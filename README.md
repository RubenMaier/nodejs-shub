<h1 align="center">NodeJS Shub</h1>
<p align="center">
    <img src="./logo.PNG">
</p>

Simple and flexible module to work with de Scrapinghub API with Node.js and derivatives.

---

## Installation

```bash
npm install nodejs-shub
```

## Usage

**INIT**

```javascript
import ScrapingHub from "nodejs-shub";

const key: string = "your api key";
const shub: ScrapingHub = new ScrapingHub(key);
```

**RUN**

```javascript
import { priorityEnum } from "nodejs-shub/enums";

const runParams = {
    project_id, // int - requiered
    spider_name, // string - requiered
    {
      args: {"arg1key":"arg1value", ... , "argNkey":"argNvalue"}; // string json object
      {
        units: units_value; // int
        add_tag: ["add_tag1", ..., "add_tagN"]; // string list
        priority: priorityEnum.______; // specific enum
        job_settings: {"sett1key":"sett1value", ... , "settNkey":"settNvalue"}; // string json object
      };
    }
}

shub.jobController
    .run(runParams)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
```

**UPDATE**

```javascript
const updateParams = {
    project_id, // int - requiered
    job_id, // string - requiered
    {
        add_tag: ["add_tag1", ..., "add_tagN"]; // string list
        remove_tag: ["remove_tag1", ..., "remove_tagN"]; // string list
    }
}

shub.jobController
    .update(updateParams)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
```

**STOP**

```javascript
const stopParams = {
    project_id, // int - requiered
    job_id // string - requiered
};

shub.jobController
    .stop(stopParams)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
```

**DELETE**

```javascript
const deleteParams = {
    project_id, // int - requiered
    ["job_id1", ... , "job_idN"] // string - requiered
};

shub.jobController
    .delete(deleteParams)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
```

**GET**

```javascript
import { stateJobEnum } from "nodejs-shub/enums";

const getParams = {
    project_id, // int - requiered
    {
        job_id: "job_id"; // string
        spider_name: "spider_name"; // string
        state: stateJobEnum.______; // specific enum
        has_tag: "has_tag"; // string
        lacks_tag: "lacks_tag"; // string
    }
}

shub.JobSearcher
    .get(params)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](./LICENCE)
