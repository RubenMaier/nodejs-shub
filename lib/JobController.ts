import {
  keyValueString,
  runSuccess,
  runError,
  deleteError,
  deleteSuccess,
  stopSuccess,
  stopError,
  updateSuccess,
  updateError,
} from "./interfaces";
import { generatePostRequest } from "./utils";
import { RequestEntity } from "./RequestEntity";
import { priorityEnum } from "./enums";

export class JobController extends RequestEntity {
  constructor(headers: keyValueString) {
    super(headers);
  }

  public run(
    project_id: number,
    spider_name: string,
    others_params?: {
      args?: keyValueString;
      extra_params?: {
        units?: number;
        add_tag?: string[];
        priority?: priorityEnum;
        job_settings?: keyValueString;
      };
    }
  ): Promise<runSuccess | runError> {
    const paramsRequest = {
      project: project_id,
      spider: spider_name,
      ...others_params.extra_params,
      ...others_params.args,
    };
    console.log("params ", paramsRequest);
    return generatePostRequest(
      "https://app.scrapinghub.com/api/run.json",
      paramsRequest,
      this._getHeader()
    );
  }

  public update(
    project_id: number,
    job_id: string,
    others_params?: {
      add_tag?: string[];
      remove_tag?: string[];
    }
  ): Promise<updateSuccess | updateError> {
    const paramsRequest = {
      project: project_id,
      job: job_id,
      ...others_params,
    };
    return generatePostRequest(
      "https://app.scrapinghub.com/api/jobs/update.json",
      paramsRequest,
      this._getHeader()
    );
  }

  public stop(
    project_id: number,
    job_id: string
  ): Promise<stopSuccess | stopError> {
    const paramsRequest = {
      project: project_id,
      job: job_id,
    };
    return generatePostRequest(
      "https://app.scrapinghub.com/api/jobs/stop.json",
      paramsRequest,
      this._getHeader()
    );
  }

  public async delete(
    project_id: number,
    job_id: string[]
  ): Promise<deleteSuccess | deleteError> {
    const paramsRequest = {
      project: project_id,
      job: job_id,
    };
    return generatePostRequest(
      "https://app.scrapinghub.com/api/jobs/delete.json",
      paramsRequest,
      this._getHeader()
    );
  }
}
