function adduser()
{
    user_name1 = document.getElementById("player_1").value;
    user_name2 = document.getElementById("player_2").value;

    localStorage.setItem("username",user_name1);
    localStorage.setItem("username",user_name2);
}