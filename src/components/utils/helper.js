import moment from "moment";

export const getDateTimeRange = (date) => {
	var difference = moment(date, "DD/MM/YYYY hh:mm:ss").fromNow();
	return difference;
};
