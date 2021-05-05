import moment from "moment";
// export const timeCurrentIso8601 = () => (new Date()).toISOString;

export const timeNow = moment().format('YYYY-MM-DD h:mm:ss a');