var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {

        fetch('api/waiting/post.php' {
          method:'post',
          body: JSON.stringify(this.patient)
          headers:{"Content-Type": "application/json; charset=utf-8"}
        })
       .then(///copy from tom's branch)

       ///waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
