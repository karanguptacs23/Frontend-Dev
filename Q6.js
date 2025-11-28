// Q6 User Registration With Duplicate Check (Axios)
async function registerUser() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;

  let check = await axios.get(`/users?email=${email}`);

  if (check.data.length > 0) {
    alert("Email already registered.");
    return;
  }

  await axios.post('/users', { name, email });
  alert("Registered successfully!");
}