package models

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"go-api/utils"

)

type Patient struct {
	gorm.Model
	Age uint `json:"age"`
	Sex string `json:"sex"`
	Doctor_id uint `json:"doctor_id"`
	stayedIn uint `json:"hospital_id"`
}

type Hospital struct {
	gorm.Model
	Name   string `json:"name"`
	Hospital_id uint   `json:"hospital_id"` //The user/doctor that this patient belongs to
 }

/*
 This struct function validate the required parameters sent through the http request body

returns message and true if the requirement is met
*/

func (patient *Patient) Validate() (map[string]interface{}, bool) {

	if patient.Age <= 0 {
		return utils.Message(false, "age can't be under 0"), false
	}

	if patient.Sex == "" {
		return utils.Message(false, "Sex should be on the payload"), false
	}

	if patient.Doctor_id <= 0 {
		return utils.Message(false, "User is not recognized"), false
	}

	//All the required parameters are present
	return utils.Message(true, "success"), true
}

func (patient *Patient) Create() (map[string]interface{}) {

	if resp, ok := patient.Validate(); !ok {
		return resp
	}

	GetDB().Create(patient)

	resp := utils.Message(true, "success")
	resp["patient"] = patient
	return resp
}

func GetPatient(id uint) (*Patient) {

	patient := &Patient{}
	err := GetDB().Table("patients").Where("id = ?", id).First(patient).Error
	if err != nil {
		return nil
	}
	return patient
}

func GetPatients(hospital_id uint) ([]*Patient) {

	patients := make([]*Patient, 0)
	err := GetDB().Table("patients").Where("hospital_id = ?", hospital_id).Find(&patients).Error
	if err != nil {
		fmt.Println(err)
		return nil
	}

	return patients
}