import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex gap-4'>

      <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
        <input
          type="radio"  // Use radio for exclusive choice
          name="gender"
          value="male"
          checked={selectedGender === "male"}
          onChange={onCheckboxChange}
          className='checkbox '
        />
        <span className='label-text text-white'>Male</span>
      </label>

      <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
        <input
          
          type="radio"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={onCheckboxChange}
          className='checkbox '
        />
        <span className='label-text text-white'>Female</span>
      </label>

    </div>
  )
}

export default GenderCheckBox
