import { JobController } from "./JobController";
import { JobSearcher } from "./JobSearcher";

export default class Scrapinghub {
  public jobController: JobController;
  public jobsSearcher: JobSearcher;

  constructor(key: string) {
    const token: string = Buffer.from(key + ":").toString("base64");
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      Authorization: `Basic ${token}`,
    };
    this.jobController = new JobController(headers);
    this.jobsSearcher = new JobSearcher(headers);
  }
}
