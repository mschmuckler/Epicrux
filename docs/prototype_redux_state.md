```js
{
  entities: {
    seizures: {
      date: 1/1/2017,
      start_time: 14:28:00,
      duration: 1.2,
      category: "aura",
      triggers: ["some", "thing"],
      descriptions: ["some", "thing"],
      post_events: ["some", "thing"],
      custom_comment: "Lorem ipsum",
    }
  },

  session: {
    id: 1,
    username: "person1",
    bio: {
      first_name: "John",
      last_name: "Smith",
      age: 23,
      gender: "M",
      residence: "New York, NY",
      med_allergies: ["tetrazine"],
      epilepsy_cause: "unknown",
    }
  },

  errors: {
    auth: "Invalid credentials",
    addSeizure: "Start time can't be blank",
  },
}
```
