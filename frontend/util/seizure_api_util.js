export const createSeizure = (seizureInput) => {
  return $.ajax({
    method: "POST",
    url: "/api/seizures",
    data: { seizure: seizureInput },
  });
};

export const requestSeizure = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/seizures/${id}`,
  });
};

export const requestSeizures = () => {
  return $.ajax({
    method: "GET",
    url: `/api/seizures`,
  });
};
