package controllers

import (
	"encoding/json"
	"go-api/models"
	"go-api/utils"
	"net/http"
)

var CreatePatient = func(w http.ResponseWriter, r *http.Request) {

	user := r.Context().Value("user").(uint) //Grab the id of the user that send the request
	patient := &models.Patient{}

	err := json.NewDecoder(r.Body).Decode(patient)
	if err != nil {
		utils.Respond(w, utils.Message(false, "Error while decoding request body"))
		return
	}

	patient.Doctor_id = user
	resp := patient.Create()
	utils.Respond(w, resp)
}

var GetPatientsFor = func(w http.ResponseWriter, r *http.Request) {

	id := r.Context().Value("hospital").(uint)
	data := models.GetPatients(id)
	resp := utils.Message(true, "success")
	resp["data"] = data
	utils.Respond(w, resp)
}
