import { keyValueString, keyValueAny, getSuccess, getError } from "./interfaces";
import { stateJobEnum } from "./enums";
import { isNullOrUndefined } from "util";
import { generateGetRequest } from "./utils";
import { RequestEntity } from "./RequestEntity";

export class JobSearcher extends RequestEntity {
  constructor(headers: keyValueString) {
    super(headers);
  }

  public get(
    project_id: number,
    others_params?: {
      job_id?: string;
      spider_name?: string;
      state?: stateJobEnum;
      has_tag?: string;
      lacks_tag?: string;
    }
  ): Promise<getSuccess | getError> {
    let requiered_params: keyValueAny = {};
    requiered_params.project = project_id;
    let others: keyValueAny = {};
    if (!isNullOrUndefined(others_params.job_id)) {
      others.job = others_params.job_id;
    }
    if (!isNullOrUndefined(others_params.spider_name)) {
      others.spider = others_params.spider_name;
    }
    if (!isNullOrUndefined(others_params.state)) {
      others.state = others_params.state;
    }
    if (!isNullOrUndefined(others_params.has_tag)) {
      others.has_tag = others_params.has_tag;
    }
    if (!isNullOrUndefined(others_params.lacks_tag)) {
      others.lacks_tag = others_params.lacks_tag;
    }
    return generateGetRequest(
      "https://app.scrapinghub.com/api/jobs/list.json",
      this._getHeader(),
      requiered_params,
      Object.keys(others).length ? others : null
    );
  }
}
