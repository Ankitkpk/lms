import React from 'react'

const CommonForm = ({handleSubmit,ButtonText}) => {
  return (
   <form onSubmit={handleSubmit}>
   <Button type="submit">{ButtonText ||'submit' }</Button>
   </form>
  )
}

export default commonForm