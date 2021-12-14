export const fetchActivities = () =>  fetch("https://aircall-job.herokuapp.com/activities");
export const fetchActivityDetail = (id) =>  fetch(`https://aircall-job.herokuapp.com/activities/${id}`);
export const fetchArchiveCall = (id) =>  fetch(`https://aircall-job.herokuapp.com/activities/${id}`);