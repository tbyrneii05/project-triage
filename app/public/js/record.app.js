var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
      fetch('api/records/post.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.recordPatient = json })
    },
    handleSubmit(event) {
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordPatient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { patientRecordsApp.recordPatient = json})
      .catch( err => {
        console.error('WORK TRIAGE ERROR:');
        console.error(err);
      })
      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPatients();
  }
});
