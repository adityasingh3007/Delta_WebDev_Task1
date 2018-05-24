/* 
Here whenever a mentee is added an ID is given to it starting from 1,2,3.. so on .
And corresponding index i.e [mentee_ID-1] is updated as 1 in mentee array. 
This shows that ID is not available anymore . Whenever a mentee profile is deleted its 
corresponind ID's index is set to -1 so that next time whenever a new mentee is 
created that ID can be again used.
*/

//Gloabal variables
 var nom=0;
 var mentee=[];             /* Array to store menter ID. If the index corresponding
							  is 1 then that ID is not available, if index is -1 then 
							  that ID is available. */
 var mentee_rate=[];        /* Array to store the rating of the mentee corresponding 
                              to their ID's index. Therefore rating of ID x is stored 
							  at index [x-1]. */
							  
//Function to expand the profile of a particular mentee and collaspes other profiles.							  
  function expand_profile(x) {                                             
        if(document.getElementById("exp_"+x).innerHTML=="+") {         	
			document.getElementById("exp_cont"+x).style.display="block";			   
			document.getElementById("exp_"+x).innerHTML="-";						   
			//Code to collaspe all other profile.
			for(i=0;i<mentee.length;i++) {											   
				if(mentee[i]==1) {													   
						var m=i+1;													   
						if(m!=x) {													   
							document.getElementById("exp_cont"+m).style.display="none"; 
							document.getElementById("exp_"+m).innerHTML="+";			  
						}
				}
			}
		}
	else {
       document.getElementById("exp_cont"+x).style.display="none";
       document.getElementById("exp_"+x).innerHTML="+"; 
    }
  }

//Function to count the number of available mentee in mentee array
  function count_available_ID() {
	/* Array will be traversed and for each index having value 1,
	   val will be incremented and finally val will be returned */
	var val=0;
	for(i=0;i<mentee.length;i++) {
		if(mentee[i]==1)
			++val;
	}
    return val;
  }

//Function to display the div which adds new mentee.  
 function display_add_mentee() {
    new_mentee.style.display="block";
    u_m_name.focus();					//Set focus to the input taking mnetee's name
  }

//Function to check which Id is available to assign to the newly created mentee ID.  
 function check_avaibility_of_ID() {
    var pos=false;
    var len=mentee.length;
    if(len==0)
      return len;
    else {
       for(i=0;i<len;i++) {
			if(mentee[i]==-1) { 
				pos=i;
				break;
			}
        }
        if(pos==false) 
            return len;
        else
           return pos;
    }
  }

//Function to add new mentee.
 function add_ment() {
    var flag=1;
    var gender="";
    var mentee_name=document.getElementById("u_m_name").value;
    var age=document.getElementById("u_m_age").value;
    var dob=new Date(document.getElementById("u_m_dob").value);
    var day=dob.getDate();
    if(day<10)
       day="0"+day;
    var month=dob.getMonth()+1;
    if(month<10)
       month="0"+month;
    var yr=dob.getFullYear();
    dob=[day,month,yr].join('-');
    var profile=document.getElementById("u_m_profile").value;
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
      var pos=check_avaibility_of_ID(); 					//Get the position from mentee array to add this ID.
      nom=pos+1;								//Acutal ID = pos +1
      var table = document.getElementById("lis_ment");
      var newRow = table.insertRow(table.rows.length).outerHTML="<tr class='pal' id='r_"+nom+"'><td class='expander' id='exp_"+nom+"' onClick='expand_profile("+nom+");'>+</td><td id=''><div class='m_name t_in' id='name_"+nom+"'>"+mentee_name+"</div><div class='m_rate t_in'><div class='star_cont'><div class='str_wrapper'><input type='checkbox' id='m"+nom+"_st_1' onClick='star(this);'><label for='m"+nom+"_st_1' id='m"+nom+"_st_l_1' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+nom+"_st_2' onClick='star(this);'><label for='m"+nom+"_st_2' id='m"+nom+"_st_l_2' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+nom+"_st_3' onClick='star(this);'><label for='m"+nom+"_st_3' id='m"+nom+"_st_l_3' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+nom+"_st_4' onClick='star(this);'><label for='m"+nom+"_st_4' id='m"+nom+"_st_l_4' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div><div class='str_wrapper'><input type='checkbox' id='m"+nom+"_st_5' onClick='star(this);'><label for='m"+nom+"_st_5' id='m"+nom+"_st_l_5' onmouseover='star_hover(this);' onmouseout='star_out(this);'></label></div></div></div><div class='exp_cont' id='exp_cont"+nom+"' ><div class='comm_cont e_div'><textarea placeholder='Write down comments here'></textarea></div><div class='abt_cont e_div'><div class='_head t_col_ab'>About:</div><div class='m_abt_cont'><table id='abt'><tr><td class='abt_leg'>Age :</td><td> <span id='age_"+nom+"'>"+age+"</span></td></tr><tr><td class='abt_leg'>D.O.B :</td><td> <span id='dob_"+nom+"'>"+dob+"</span></td></tr><tr><td class='abt_leg'>Gender :</td><td> <span id='gender_"+nom+"'>"+gender+"</span></td></tr><tr><td class='abt_leg'>Profile :</td> <td><span id='profile_"+nom+"'>"+profile+"</span></td></tr></table></div></div><div class='set_row'><span class='s_but_cont'><input type='button' class='s_but' value='Edit' onClick='edit_mentee("+nom+")'></span><span class='s_but_cont'><input type='button' class='s_but del' value='Delete' onClick='delet(this)'></span></div></div></div></td></tr>"; 
	  new_mentee.style.display="none";						//Hide the div which adds new mentee.
	  alert ("Succesfully Added");
	  mentee_rate[pos]=0;									//Update its rating to 0
	  document.getElementById("u_m_name").value="";			//Make the input fields value back to "" to accept the new mentee details next time.
	  document.getElementById("u_m_age").value="";
	  document.getElementById("u_m_profile").value="";
	  document.getElementById("u_m_dob").value="";
	  document.getElementById("u_female").checked=false;
	  document.getElementById("u_male").checked=false;
	  document.getElementById("empty_list").style.display="none";  //Hide the div which shows no mentee is added. Please add a mentee.
	  mentee[pos]=1;										//Update the mentee array with current ID's index with 1.
	  document.getElementById("nom_disp").innerHTML=count_available_ID();
    }
 }

//Function to edit the mentee profile, hence open the edit mentee section.
 function edit_mentee(n) {
    document.getElementById("edit_mentee").style.display="block";
    u_e_name.focus();
    var nam=document.getElementById("name_"+n).innerHTML;
    var age=document.getElementById("age_"+n).innerHTML;
    var gender=document.getElementById("gender_"+n).innerHTML;
    var profile=document.getElementById("profile_"+n).innerHTML;

    document.getElementById("u_e_name").value=nam;
    document.getElementById("u_e_age").value=age;
    document.getElementById("u_e_profile").value=profile;
    document.getElementById("e_m_index").value=n;
    if(gender=="Female")
         document.getElementById("u_e_fem").checked=true;
    else
         document.getElementById("u_e_mal").checked=true;
 }

//Function to update the editing result after submit is clicked.
 function edit_app_ment() {
    var n=document.getElementById("e_m_index").value;
    var flag=1;
    var gender="";
    var nam=document.getElementById("u_e_name").value;
    var age=document.getElementById("u_e_age").value;
    var profile=document.getElementById("u_e_profile").value;
    if(nam=="") {
     alert("Name is required");
     document.getElementById("u_e_name").focus();
     flag=0;
    }
    if(age==""){
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
    if(flag==1){
     document.getElementById("name_"+n).innerHTML=nam;
     document.getElementById("age_"+n).innerHTML=age;
     document.getElementById("gender_"+n).innerHTML=gender;
     document.getElementById("profile_"+n).innerHTML=profile;
     document.getElementById("edit_mentee").style.display="none";
     alert ("Edit Successful");
     document.getElementById("u_e_name").value="";
     document.getElementById("u_e_age").value="";
     document.getElementById("u_e_profile").value="";
     document.getElementById("u_e_fem").checked=false;
     document.getElementById("u_e_mal").checked=false;       
    }
 }

//Function to delete the mentee profile.
 function delet(n) { 
    var del_id=n.parentNode.parentNode.parentNode.id;	//To store the calling row ID.
    var index=del_id.charAt(8);				//To extract the actual ID number from row ID.
    if (confirm("DO YOU REALLY WANT TO DELETE? DATA ONCE LOST CAN NOT BE RETRIVED.")) {
		var table = document.getElementById("lis_ment");
		table.deleteRow(n.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex); 
		mentee[index-1]=-1;								//Update the ID in mentee array to -1.
		mentee_rate[index-1]=-1;						//Update that ID's rating to -1.
		document.getElementById("nom_disp").innerHTML=count_available_ID();
		var order =table.rows.length;
		if(order==0)
			document.getElementById("empty_list").style.display="block";
		alert("Data DELETED!!!");  
    }
    else{
    alert("Deletion Aborted");
      }
 }

//Function to change background colour of box according to rating and to stor the rating in mentee_rate array.
 function star(n) {
      var x=n.id;			//Extract the id of star whcih was clicked.
      var num=x.charAt(6);		//Extract the position of star clicked from 1-5.
      var check=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5); //To generate similar id except having the position of star.
      var ment=x.charAt(1);		//To extract the mentee ID of which star is clicked.
      var i,j;
      for(i=1;i<=num;i++) {			//Loop to 'check' all star before and the clicked star itself.
		j=check+i;
		document.getElementById(j).checked=true;
      }			
      for(i=5;i>num;i--) {			//Loop to 'uncheck' all star after the clicked star.
		j=check+i;
		document.getElementById(j).checked=false;
      }
      var tr="r_"+ment;    //To assign the tr id of which background colour is to be changed. 
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
      mentee_rate[ment-1]=num;			//Update the mentee_rate array with current rating.
 }

//Function to display hover star animation.
function star_hover(n) {
      var x=n.id;
      var num=x.charAt(8);
      var check=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5)+x.charAt(6)+x.charAt(7);
      var i,j;
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
      var x=n.id;
      var num=x.charAt(8);
      var check=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5)+x.charAt(6)+x.charAt(7);
      var checkbox_id=x.charAt(0)+x.charAt(1)+x.charAt(2)+x.charAt(3)+x.charAt(4)+x.charAt(5);
      var i,j;
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
      var sort=0;
      var x,y;
      if(count_available_ID()==0)
        alert("Mentee list empty. Can't sort an empty list. Please add some mentees first.");
      else
      if(count_available_ID()==1)
        alert("Only one Mentee found. Please add one more to sort.");
      else {
			var table = document.getElementById("lis_ment");
			var rows=table.getElementsByClassName("pal");
			for(j=0;j<(rows.length-1);j++) {
				for(i=0;i<(rows.length-1);i++) {
					x=rows[i].id;
					y=rows[i+1].id;
					if(mentee_rate[x.charAt(2)-1]<mentee_rate[y.charAt(2)-1]){
						rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
					}
				}
			}
		}
  }

//Function to calculate age from DOB.  
 function cal_age() {
		var dob=new Date(document.getElementById("u_m_dob").value);
		var curr_date=new Date();
		
		var day=dob.getDate();				//Extract the given date
		var mon=dob.getMonth()+1;			//Extract the given month
		var yr=dob.getFullYear();			//Extract the given year
		
		var c_day=curr_date.getDate();		//Extract current date
		var c_mon=curr_date.getMonth()+1;	//Extract current month
		var c_yr=curr_date.getFullYear();	//Extract current ear
		
		var age=c_yr-yr;
		if(c_mon<mon)
			--age;
		else if(c_mon==mon){
			   if(c_day<day)
				   age--;
		     }
		document.getElementById("u_m_age").value=age;		//Display the age in the textbox.
 }















