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
          className='checkbox border-slate-900'
        />
        <span className='label-text'>Male</span>
      </label>

      <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={onCheckboxChange}
          className='checkbox border-slate-900'
        />
        <span className='label-text'>Female</span>
      </label>

    </div>
  )
}

export default GenderCheckBox
