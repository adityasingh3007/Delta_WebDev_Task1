//Gloabal variables
 let mentee;             /* Array to store mentee details in each its element as objects.*/

//Constructor to add details to newly created mentee's object. 
function Create_mentee(m_name,m_dob,m_age,m_gender,m_profile,m_rating,m_comments) {
	this.name=m_name;
	this.dob=m_dob;
	this.age=m_age;
	this.gender=m_gender;
	this.profile=m_profile;
	this.rating=m_rating;
	this.comments=m_comments;
}

/*Function to check if previously some details were added or not
  plus to check whether browser supports localstorage or not */
 function check_saved_data() {
	 if(typeof(Storage!=undefined)) {                                     //If typeof(Storage) is defined i.e localstorage is supported.
		 if(localStorage.getItem("mentee")!==null) {					  // To check whether any data is stored or not.
			 mentee=JSON.parse(localStorage.getItem("mentee"));			  //Get the data stored in the localstorage and store it in mentee array.
			 document.getElementById("empty_list").style.display="none";  //Hide the div which shows no mentee is added. Please add a mentee.
			 display_all_mentee();										  
		 }
		else {
			mentee=[];
			document.getElementById("nom_disp").innerHTML=0;			  //Show no profile is added yet.
			document.getElementById("empty_list").style.display="block";  //Display the div which shows no mentee is added. Please add a mentee.
		}
	 }
	 else 
		 alert("Your browser doesn't support LOCAL STORAGE");
  }	 
/* Function to display all available mentee profile on the page.
*/
  function display_all_mentee() {
	  document.getElementById("nom_disp").innerHTML=mentee.length;			//Update the number of mentees available.
	  let table = document.getElementById("lis_ment");						//First clear the table.
	  table.innerHTML = "";
	  if(localStorage.getItem("mentee")!==null) {					  		// To check whether any data is stored or not.
	    mentee=JSON.parse(localStorage.getItem("mentee"));			  		//Get the data stored in the localstorage and store it in mentee array.						
		document.getElementById("empty_list").style.display="none";			//Hide the div which shows no mentee is added. Please add a mentee.
			 for(i=0;i<mentee.length;i++) {                                 //Loop to add all mentee.
				 let table = document.getElementById("lis_ment");
				 let newRow = table.insertRow(table.rows.length).outerHTML="<tr class='pal' id='r_"+i+"'><td class='expander' id='exp_"+i+"' onClick='expand_profile("+i+");'>+</td><td id=''><div class='m_name t_in' id='name_"+i+"'>"+mentee[i].name+"</div><div class='m_rate t_in'><div class='star_cont'><div class='str_wrapper'><input type='checkbox' id='m"+i+"_st_1' onClick='star(this);'><label for='m"+i+"_st_1' id='m"+i+"_st_l_1' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+i+"_st_2' onClick='star(this);'><label for='m"+i+"_st_2' id='m"+i+"_st_l_2' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+i+"_st_3' onClick='star(this);'><label for='m"+i+"_st_3' id='m"+i+"_st_l_3' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+i+"_st_4' onClick='star(this);'><label for='m"+i+"_st_4' id='m"+i+"_st_l_4' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+i+"_st_5' onClick='star(this);'><label for='m"+i+"_st_5' id='m"+i+"_st_l_5' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div></div></div><div class='exp_cont' id='exp_cont"+i+"' ><div class='comm_cont e_div'><div class='input_legend' id='ui_comment_"+i+"' style='margin-top:10px;margin-bottom:10px'>Comments :</div><div><textarea placeholder='Write down comments here' onchange='handle_comment(this.id)' id='comment_"+i+"' oninput='show_comments_caption("+i+",this.id)'></textarea></div></div><div class='abt_cont e_div'><div class='_head t_col_ab'>About:</div><div class='m_abt_cont'><table id='abt'><tr><td class='abt_leg'>Age :</td><td> <span id='age_"+i+"'>"+mentee[i].age+"</span></td></tr><tr><td class='abt_leg'>D.O.B :</td><td> <span id='dob_"+i+"'>"+mentee[i].dob+"</span></td></tr><tr><td class='abt_leg'>Gender :</td><td> <span id='gender_"+i+"'>"+mentee[i].gender+"</span></td></tr><tr><td class='abt_leg'>Profile :</td> <td><span id='profile_"+i+"'>"+mentee[i].profile+"</span></td></tr></table></div></div><div class='set_row'><span class='s_but_cont'><input type='button' class='s_but' value='Edit' onClick='edit_mentee("+i+")'></span><span class='s_but_cont'><input type='button' class='s_but del' value='Delete' onClick='delet("+i+")'></span></div></div></div></td></tr>"; 
				 let rating=mentee[i].rating;								//Get the current mentee's rating.
				 for(j=1;j<=rating;j++) {									//Update the stars status accordingly.
					 document.getElementById("m"+i+"_st_"+j).checked=true;
				 }
				 let tr="r_"+i;     										//Colour the background of the row accordingly.
				 if(rating==1){ 
						document.getElementById(tr).style.background="#F75D59";
				 } 
			 	 else if(rating==2) {
					document.getElementById(tr).style.background="#ff822a";
				 }
				 else if(rating==3) {
					document.getElementById(tr).style.background="#FFFF00";
				 }
				 else if(rating==4) {
					document.getElementById(tr).style.background="#B1FB17";
				 }
				 else if(rating==5) {
					document.getElementById(tr).style.background="#66ca00";
				 }
				 let comments=mentee[i].comments;							//Get the comments.
				 document.getElementById("comment_"+i).value=comments;		//Add it to comment box in its respective profile.
			 }
	  }
	  else {																//If no data is available
		  document.getElementById("nom_disp").innerHTML=0;					//Show no profile is added yet.
		  document.getElementById("empty_list").style.display="block";      //Display the div which shows no mentee is added. Please add a mentee.
	  }
		  
 }
 
// Function to handle the comments given to the mentee.
 function handle_comment(id) {
	 let value=document.getElementById(id).value;                //Take the value of comment.
	 let index=id.charAt(8);									 //Extract the index whose comment was changed.
	 mentee[index].comments=value;								 //Updates it comments value.
	 localStorage.clear();										 //Clear localstorage
	 localStorage.setItem("mentee",JSON.stringify(mentee));		 //Re-Write into localstorage
 }
  
//Function to expand the profile of a particular mentee and collaspes other profiles.							  
  function expand_profile(x) {                                             
        if(document.getElementById("exp_"+x).innerHTML=="+") {         	
			document.getElementById("exp_cont"+x).style.display="block";			   
			document.getElementById("exp_"+x).innerHTML="-";
			document.getElementById("comment_"+x).focus();
			if(document.getElementById("comment_"+x).value!="")
				document.getElementById("ui_comment_"+x).style.height="14px";
			//Code to collaspe all other profile.
			for(i=0;i<mentee.length;i++) {
				if(i!=x) {
					document.getElementById("exp_cont"+i).style.display="none";			   
					document.getElementById("exp_"+i).innerHTML="+";
				}
			}
		}
	else {
       document.getElementById("exp_cont"+x).style.display="none";
       document.getElementById("exp_"+x).innerHTML="+"; 
    }
  }


//Function to display the div which adds new mentee.  
 function display_add_mentee() {
    new_mentee.style.display="block";
    u_m_name.focus();					//Set focus to the input taking mnetee's name
  }

//Function to add new mentee.
 function add_ment() {
    let flag=1;
    let gender="";
    let mentee_name=document.getElementById("u_m_name").value;
    let age=document.getElementById("u_m_age").value;
    let dob=new Date(document.getElementById("u_m_dob").value);
    let day=dob.getDate();
    if(day<10)
       day="0"+day;
    let month=dob.getMonth()+1;
    if(month<10)
       month="0"+month;
    let yr=dob.getFullYear();
    dob=[day,month,yr].join('-');
    let profile=document.getElementById("u_m_profile").value;
    if(mentee_name=="") {
		alert("Name is required");
		document.getElementById("u_m_name").focus();
		flag=0;
    }
    if(age=="") {
		alert("Age is required");
		document.getElementById("u_m_age").focus();
		flag=0;
    }
    if(dob=="NaN-NaN-NaN"){
		alert("D.O.B is required");
		document.getElementById("u_m_dob").focus();
		flag=0;
    }
    if(profile==""){
		alert("Profile is required");
		document.getElementById("u_m_profile").focus();
		flag=0;
    }
    if (document.getElementById("u_female").checked) {
       gender = document.getElementById("u_female").value;
    }
    else
    if (document.getElementById("u_male").checked) {
       gender = document.getElementById("u_male").value;
    }
    if(gender==""){
		alert("Gender is required");
		flag=0;
    }

  if(flag==1)
    {
      mentee.push(new Create_mentee(mentee_name,dob,age,gender,profile,0,""));   //Create a new element to mentee array and push the object in it.
	  localStorage.setItem("mentee",JSON.stringify(mentee));					 //Store it in localStorage.
	  alert ("Succesfully Added");
	  document.getElementById("u_m_name").value="";			//Make the input fields value back to "" to accept the new mentee details next time.
	  document.getElementById("u_m_age").value="";
	  document.getElementById("u_m_profile").value="";
	  document.getElementById("u_m_dob").value="";
	  document.getElementById("u_female").checked=false;
	  document.getElementById("u_male").checked=false;
	  document.getElementById("ui_name").style.height="0px";
	  document.getElementById("ui_age").style.height="0px";
	  document.getElementById("ui_dob").style.height="0px";
	  document.getElementById("ui_profile").style.height="0px";
	  new_mentee.style.display="none";						//Hide the div which adds new mentee.
	  display_all_mentee();									//Update the mentee list.
    }
 }

//Function to edit the mentee profile, hence open the edit mentee section.
 function edit_mentee(x) {
	document.getElementById("u_e_name").value=document.getElementById("name_"+x).innerHTML;
	document.getElementById("u_e_age").value=document.getElementById("age_"+x).innerHTML;
	document.getElementById("u_e_profile").value=document.getElementById("profile_"+x).innerHTML;
	if(document.getElementById("gender_"+x).innerHTML=="Male")
		document.getElementById("u_e_mal").checked=true;
	else
		document.getElementById("u_e_fem").checked=true;
	document.getElementById("calling_ID").value=x;
	document.getElementById("edit_mentee").style.display="block";
 }

//Function to update the editing result after submit is clicked.
 function edit_app_ment(x) {
	let flag=1;
	let gender="";
    let mentee_name=document.getElementById("u_e_name").value;
    let age=document.getElementById("u_e_age").value;
    let profile=document.getElementById("u_e_profile").value;
    if(mentee_name=="") {
		alert("Name is required");
		document.getElementById("u_e_name").focus();
		flag=0;
    }
    if(age=="") {
		alert("Age is required");
		document.getElementById("u_e_age").focus();
		flag=0;
    }
    if(profile==""){
		alert("Profile is required");
		document.getElementById("u_e_profile").focus();
		flag=0;
    }
    if (document.getElementById("u_e_fem").checked) {
       gender = document.getElementById("u_e_fem").value;
    }
    else
    if (document.getElementById("u_e_mal").checked) {
       gender = document.getElementById("u_e_mal").value;
    }
    if(gender==""){
		alert("Gender is required");
		flag=0;
    }
    if(flag==1) {
		let index=document.getElementById("calling_ID").value;
		mentee[index].name=mentee_name;
		mentee[index].age=age;
		mentee[index].profile=profile;
		mentee[index].gender=gender;
		document.getElementById("edit_mentee").style.display="none";
		localStorage.clear();
		localStorage.setItem("mentee",JSON.stringify(mentee));
		display_all_mentee();
		alert("Edit SUCCESSFULL!");
	}
 }

//Function to delete the mentee profile.
 function delet(n) { 
    if(confirm("Do you really want to Delete this profile? Once Deleted this action can't be undone.")) {
		alert("Deleted Succesfully!");
		if(mentee.length==1) {
			localStorage.clear();
			mentee=[];
			display_all_mentee();
		}
		else {
		mentee.splice(n,1);
		localStorage.setItem("mentee",JSON.stringify(mentee));
		display_all_mentee();
		}
    }
	else
		alert("Deletion ABORTED!");
 }
 
 
//Function to delete all mentee profile at once, hence clear the localStorage.
 function delete_all_ment() {
	 if(confirm("Do you really want to Delete all profile(s)? Once Deleted this action can't be undone.")) {
		localStorage.clear();
		mentee=[];
		display_all_mentee();
		alert("All mentee details SUCCESSFULLY DELETED!");
    }
	else
		alert("Deletion ABORTED!");
 }
 
//Function to change background colour of box according to rating and to stor the rating in mentee_rate array.
 function star(n) {
      let x=n.id;			//Extract the id of star whcih was clicked.
      let num=x.charAt(6);		//Extract the position of star clicked from 1-5.
      let check=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5); //To generate similar id except having the position of star.
      let ment=x.charAt(1);		//To extract the mentee ID of which star is clicked.
      let i,j;
      for(i=1;i<=num;i++) {			//Loop to 'check' all star before and the clicked star itself.
		j=check+i;
		document.getElementById(j).checked=true;
      }			
      for(i=5;i>num;i--) {			//Loop to 'uncheck' all star after the clicked star.
		j=check+i;
		document.getElementById(j).checked=false;
      }
      let tr="r_"+ment;    //To assign the tr id of which background colour is to be changed. 
      if(num==1){ 
             document.getElementById(tr).style.background="#F75D59";
      }
      else if(num==2) {
            document.getElementById(tr).style.background="#ff822a";
      }
      else if(num==3) {
            document.getElementById(tr).style.background="#FFFF00";
      }
      else if(num==4) {
            document.getElementById(tr).style.background="#B1FB17";
      }
      else if(num==5) {
            document.getElementById(tr).style.background="#66ca00";
      }
      mentee[ment].rating=num;										//Update the rating in its coreesponding profile value.
	  localStorage.clear();											//Clear the localStorage
	  localStorage.setItem("mentee",JSON.stringify(mentee));		//Re-Write to localStorage.
 }

//Function to display hover star animation.
function star_hover(n) {
      let x=n.id;
      let num=x.charAt(8);
      let check=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5)+x.charAt(6)+x.charAt(7);
      let i,j;
      for(i=1;i<=num;i++){
             j=check+i;
             document.getElementById(j).style.content="url('./star_checked.png')";
      }
      for(i=5;i>num;i--){
             j=check+i;
             document.getElementById(j).style.content="url('./star.png')";
      }

 }

//Function to display the rating accordingly when mouse is removed from rating bar.
 function star_out(n)
     {
      let x=n.id;
      let num=x.charAt(8);
      let check=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5)+x.charAt(6)+x.charAt(7);
      let checkbox_id=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5);
      let i,j;
      for(i=1;i<6;i++) {
             j=checkbox_id+i;
             if(document.getElementById(j).checked) 
                document.getElementById(check+i).style.content="url('./star_checked.png')";
            else
                document.getElementById(check+i).style.content="url('./star.png')";
      } 
 }

//Function to sort the table according to mentee's rating. (Desc order)
 function sort_ment(){
      let sort=0;
      let x,y;
	  if(mentee.length==0)
        alert("Mentee list empty. Can't sort an empty list. Please add some mentees first.");
      else
      if(mentee.length==1)
        alert("Only one Mentee found. Please add one more to sort.");
      else {
		  //Bubble sort the mentee array accroding to their element's rating.
			for(j=0;j<(mentee.length-1);j++) {
				for(i=0;i<(mentee.length-1);i++) {
					if(mentee[i].rating<mentee[i+1].rating){
						let temp=mentee[i];
						mentee[i]=mentee[i+1];
						mentee[i+1]=temp;
					}
				}
			}
			localStorage.clear();										//Clear the localStorage.
			localStorage.setItem("mentee",JSON.stringify(mentee));		//Re-Write to loca;Storage.
			display_all_mentee();										//Update the mentee list.
		}
  }

//Function to calculate age from DOB.  
 function cal_age() {
		let dob=new Date(document.getElementById("u_m_dob").value);
		let curr_date=new Date();
		
		let day=dob.getDate();				//Extract the given date
		let mon=dob.getMonth()+1;			//Extract the given month
		let yr=dob.getFullYear();			//Extract the given year
		
		let c_day=curr_date.getDate();		//Extract current date
		let c_mon=curr_date.getMonth()+1;	//Extract current month
		let c_yr=curr_date.getFullYear();	//Extract current ear
		
		let age=c_yr-yr;
		if(c_mon<mon)
			--age;
		else if(c_mon==mon){
			   if(c_day<day)
				   age--;
		     }
		document.getElementById("u_m_age").value=age;		//Display the age in the textbox.
 }
 
 //Function to show the text-caption after the corresponding text field's
 // value is changed.
 function show_text(x,feild) {
	 let id="ui_";
	 let value;
	 if(x!="dob")
		value=document.getElementById(feild).value;
    else 
		value=new Date(document.getElementById(feild).value);
	 if(value!="") 
		 document.getElementById(id+x).style.height="14px";
	 else
		 document.getElementById(id+x).style.height="0px";
 }

//Function to show the text-caption after the corresponding comment field's
// value is changed.
 function show_comments_caption(x,feild) {
	 let id="ui_comment_";
	 let value=document.getElementById(feild).value;
	 if(value!="") 
		 document.getElementById(id+x).style.height="14px";
	 else
		 document.getElementById(id+x).style.height="0px";
 }














