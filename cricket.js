var playerDetailsDiv=document.getElementById('playerDetails');
function onsignup(){
    var name_=document.getElementById('id1').value;
    var dob_=document.getElementById('id2').value;
    var imgUrl_=document.getElementById('id3').value;
    var bp_=document.getElementById('id4').value;
    var career_=document.getElementById('id5').value;
    var matches_=document.getElementById('id6').value;
    var score_=document.getElementById('id7').value;
    var fifties_=document.getElementById('id8').value;
    var centuries_=document.getElementById('id9').value;
    var wickets_=document.getElementById('id10').value;
    var average_=document.getElementById('id11').value;

    let myObj={
        name: name_,
        dob: dob_,
        imgUrl: imgUrl_,
        birthPlace: bp_,
        career: career_,
        matches: matches_,
        score: score_,
        fifties: fifties_,
        centuries: centuries_,
        wickets: wickets_,
        average: average_
    };

    axios.post('http://localhost:5000/insert-cricket',myObj)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err)); 

    

}

function search(){
    var player_=document.getElementById('query').value;
    console.log("searching...");
    axios.get(`http://localhost:5000/get-cricket/${player_}`)
    .then((result)=> {
        
        console.log(result.data);
        displayPlayer(result.data)

    })
    .catch((err)=> console.log(err));
}

function displayPlayer(myObj){
    playerDetailsDiv.innerHTML=`
        <img src="${myObj.imgUrl}" >
        <br>
        <p>${myObj.career}<p>
        <br>
        <h3 id="playerName">${myObj.name}</h3>
        <br>
        <h3>${myObj.dob}</h3>
        <br>
        <br>
        <h2>Personal Information</h2>
        <br>
        <h3>No of Matches: ${myObj.matches}</h3>
        <br>
        <h3>Runs: ${myObj.score}</h3>
        <br>
        <h3>No of fifties :${myObj.fifties}</h3>
        <br>
        <h3>No of centuries${myObj.centuries}</h3>
        <br>
        <h3>Avg: ${myObj.average}</h3>
        <br>
        <h3>Wickets: ${myObj.wickets}</h3>
        <br>
        <button onClick="editPlayer()" class="edit">Edit</button>
    `

}

function editPlayer(){
    var playerName=document.getElementById("playerName").textContent;

    axios.get(`http://localhost:5000/get-cricket/${playerName}`)
    .then((result)=> {
        var myObj=result.data;
        console.log(myObj);
        document.getElementById("id1").textContent=myObj.name;
        document.getElementById("id2").textContent=myObj.dob;
        document.getElementById("id3").textContent=myObj.imgUrl;
        document.getElementById("id4").textContent=myObj.birthPlace;
        document.getElementById("id5").textContent=myObj.career;
        document.getElementById("id6").textContent=myObj.matches;
        document.getElementById("id7").textContent=myObj.score;
        document.getElementById("id8").textContent=myObj.fifties;
        document.getElementById("id9").textContent=myObj.centuries;
        document.getElementById("id10").textContent=myObj.wickets;
        document.getElementById("id11").textContent=myObj.average;


    })
    .catch((err)=> console.log(err));      
}

