export function Form() {
  return (
    <div className="wrapper-form">
      <h2>HTML Forms</h2>
      <form action="">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="Nguyen Viet" /> <br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Trung" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

