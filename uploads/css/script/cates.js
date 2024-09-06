        const subjectsByCategory = {
    'A/L - Science (Local)': [
        'Agriculture', 'Applied Maths', 'Biology', 'Chemistry',
        'Combined Maths', 'Physics', 'Pure Maths'
    ],
    'Music': [
        'Music Instruments', 'Singing / Vocal'
    ],
    'A/L - Arts (Local)': [
        'Art', 'Buddhism/Buddhist Civilization', 'Christianity/Christian Culture',
        'Classical Languages', 'Communication and Mass Media', 'Dancing', 'Drama',
        'Foreign Languages', 'Geography', 'Greek & Roman Civilization', 'Hinduism/Hindu Civilization',
        'History', 'Islam/Islam Civilization', 'Logic', 'Mathematics', 'Music',
        'National Languages', 'Political Sciences', 'Scientific Method'
    ],
    'A/L - Commerce (Local)': [
        'Accounting', 'Business Statistics', 'Business Studies', 'Economics', 'Home Economics'
    ],
    'A/L - Technology (Local)': [
        'Bio-System Technology', 'Engineering Technology', 'Information Technology', 'Science for Technology'
    ],
    'Computer': [
        '2D/3D Animating', 'Graphic Designing', 'Hardware', 'Java', 'Networking', 'Web Development'
    ],
    'Languages': [
        'Arabic', 'Chinese', 'English', 'English - Elocution', 'French', 'Hindi', 'Japanese', 'Korean',
        'Sinhala', 'Spoken English'
    ],
    'London Exams': [
        'London A/L', 'London O/L'
    ],
    'Martial Arts': [
        'Jujitsu', 'Karate', 'Kung Fu', 'MMA', 'Taekwondo'
    ],
    'Medical Courses': [
        'ERPM'
    ],
    'O/L (Grade 6-11)': [
        'Agriculture', 'Arts', 'Buddhism', 'Business & Accounting Studies', 'Christianity',
        'Civics and Governance', 'Communication and Media Studies', 'Dancing', 'Electronic Writing & Shorthand',
        'English', 'English Literature', 'Geography', 'Health and Physical Education', 'History', 'Home Science',
        'Islam', 'Mathematics', 'OIL - ICT', 'Oriental Music', 'Science', 'Sinhala Language and Literature', 'Western Music'
    ],
    'Sports': [
        'Chess', 'Cricket', 'Football', 'Swimming'
    ],
};

var menu_values = {'Scales':'', "District":"", "Category":"", "Subject":""};

function hideAllDropdowns() {
    var allDropdowns = document.getElementsByClassName("dropDwn");
    for (var i = 0; i < allDropdowns.length; i++) {
        allDropdowns[i].style.display = 'none';
    }
}
hideAllDropdowns();  

function toggleDropdown(buttonId, menuId) {
    var button = document.getElementById(buttonId);
    var menuItems = document.getElementById(menuId).getElementsByClassName("dropDwn");

    button.addEventListener('click', function() {
        hideAllDropdowns();  // Close all other dropdowns

        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].style.display === 'none') {
                menuItems[i].style.display = 'flex';
            } else {
                menuItems[i].style.display = 'none';
            }
        }
    });

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function(event) {
            var selectedValue = event.target.getAttribute('value');
            console.log('Selected Value for', buttonId, ':', selectedValue);
            menu_values[buttonId] = selectedValue;
            var names = "cat_" + buttonId;
            if (selectedValue !== "") {
                document.getElementById(names).innerText = selectedValue;
            } else {
                document.getElementById(names).innerText = event.target.innerText;
            }
            console.log(menu_values);

            if (buttonId === 'Category') {
                populateSubjects(selectedValue);
            }

            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].style.display = 'none';
            }
        });
    }
}

function populateSubjects(category) {
    var subjectMenu = document.getElementById('SubjectMenu');
    subjectMenu.innerHTML = '';

    if (subjectsByCategory[category]) {
        subjectsByCategory[category].forEach(function(subject) {
            var li = document.createElement('li');
            li.className = 'dropDwn';
            li.innerText = subject;
            li.setAttribute('value', subject);
            subjectMenu.appendChild(li);
        });

        // Re-initialize the event listeners for the new subject list items
        var menuItems = subjectMenu.getElementsByClassName("dropDwn");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', function(event) {
                var selectedValue = event.target.getAttribute('value');
                console.log('Selected Value for Subject:', selectedValue);
                menu_values['Subject'] = selectedValue;
                var names = "cat_" + 'Subject';
                if (selectedValue !== "") {
                    document.getElementById(names).innerText = selectedValue;
                } else {
                    document.getElementById(names).innerText = event.target.innerText;
                }
                console.log(menu_values);
                // Close the dropdown after selection
                for (var j = 0; j < menuItems.length; j++) {
                    menuItems[j].style.display = 'none';
                }
            });
        }
    }
}

// Initialize dropdowns
toggleDropdown('Scales', 'ScalesMenu');
toggleDropdown('Category', 'CategoryMenu');
toggleDropdown('District', 'DistrictMenu');
toggleDropdown('Subject', 'SubjectMenu');


function submitForm() {
    console.log("formsubmited")
        // Assign values from JavaScript variable to form fields
        // alert(menu_values['Category'])
        document.getElementById('Scales_id').value = menu_values['Scales'];
        document.getElementById('District_id').value = menu_values['District'];
        document.getElementById('Category_id').value = menu_values['Category'];
        document.getElementById('Subject_id').value = menu_values['Subject'];

        // Submit the form
        document.getElementById('myForm').submit();
    }

