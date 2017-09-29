export const createSeizure = (seizure) => {
  return $.ajax({
    method: "POST",
    url: "/api/seizures",
    data: { seizure: seizure },
  });
};

export const requestSeizure = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/seizures/${id}`,
  });
};
