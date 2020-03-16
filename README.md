The Virtual Excursionist
========================

The project features some random Images of European scenery and some of UNESCO World Heritage Sites of various European countries and challenges the User to guess the Country where it is located.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Primary target audience This application could serve for the following
audiences: Heritage organisations or organisations involved with the
promotion of tourism of any kind or region. Educators that are
interested to use this format to engage students with their content.
Many other possible User Groups of Content Managers, as long as the user
is interested in the content itself. \#Who is the project for?
popularize some landmarks or other attractions in an engaging way that
could appeal to a broad range of audiences. creating a simple Quiz
application with a beautiful user interface, that can be re-used for any
kind of content. to stress the importance of heritage sites for our
cultural identity.

UI / UX / Rapid Protytyping
---------------------------

I first developed the basic structure of the Website with Placeholders
and created Prototypes for every Page ( 2 Versions, one Desktop/Tablet
\>600 PX and one for mobile devices \<600PX ).

After developing the JS Code for the Quiz, I replaced the Placeholders
and further refined the code and optimize usability.

The design considerations for this project are as follows:

Navigating the Nav-section is easy and the navbar is responsive on all
kinds of devices. The User Interface for the input elements ( start
buttons, option buttons ) is easy to understand and to use. The Content
is balanced between Usability for the Quiz application and the
presentation of the content, for this reason, I had to limit the size of
the pictures in the Quiz itself and disable the. Zoom function for
mobile devices for the results. page.

Existing Features
-----------------

### start ( start.html)

The User can get introduced to the Game and can click "start" to open
the main application ( the Quiz ).

### Quiz ( index.html )

The User will see a picture and can use between 4 buttons with country
flags on it. There are Buttons with the class "top" who show the
Question number "Question x of y" and the Time left, the user has on
average 6 seconds per image. In the End of the Quiz ( when all questions
are answered or the time is gone ) the User will get a message about how
well he was doing (100% correct ="Perfect", \>70% correct="Good!", \>30%
correct="Bloody Average.", \<30% correct="Not very good.") and
regardless of the outcome he will get a Hyperlink with the results.html
file and the message "Check the correct Locations!"

There is an "End Quiz" button in the Navbar, it will
End the Quiz and the User will get the result,
not answered questions will be counted as wrong.

### Results ( results.html)

There is a table with 3 columns ( country, picture, location ). The
Country column shows the flag of the respective country and some text.
The Image section show the image, there is a zoom on the Images when a
User hovers over them, however, this feature has been disabled for
mobile devices for usability reasons. The location section has an
embedded Map with the respective location ( Google Maps API ).

Possible adaptions or extensions left to Implement: A possibility for
Users to input data ( e.g uploading images / select locations on a map )
and easily create their own quiz. The User would select a Country or
area on a map and has to pick the City or Name of the Landmark in the
Quiz. ( This can easily be adapted to any geo-related data, for example,
mountains or ethnographic objects etcetera ). The question content which
consists only of images now, could easily be replaced by other media
formats, the same is true for the options-buttons ( could be audio files
etcetera ).

Technologies Used:
------------------

"Vanilla" Javascript was used for the Quiz.

Git / Github for version control / hosting,deployment Atom Texteditor (
development ) Google Chrome Developer Tools ( testing ) Paper.CSS This
is a CSS framework only which I used to streamline the process of
creating an appropriate, clean design. Google Maps API the library was
used to embed the Maps in the "Results" section. JQuery /
JQuery.lazyload This was used to enhance the page speed of the Results
section, especially for mobile devices.

Testing
-------

The applications have been extensively tested for usability and
responsibility manually, with media queries adjusted during the
developing progress. The validity of the Javascript code was tested in
the console ( developer tools ) and User Stories ( using the application
and receiving the expected output ).

considering the low complexity of the project, no sophisticated testing
framework or approach was needed and my quality control was mainly
centred on making sure that the application works on all modern devices
and for a wide range of users.

The User guidance is clearly outlined in the futures section ( start \>
quiz \> results ) I focused on the following user-stories ( tested with
different Screen size each, so the responsibility of each element is not
mentioned seperately ):

All sections open the Modal by clicking on the "About" Button in the
Navbar and close the modal. Click on the Brand-Name in the Navbar to
make sure that it redirects to the index.html page.

Index.html clicking on Start Quiz. quiz.html

clicking on the options and check that the "time left" and "question x
of y" sections are working as intended. let the time run low to make
sure that this will end the quiz application and will result in not
answered questions being counted as wrong, also the user has to receive a message.
check the output of the Quiz (
appropriate message, link to the results section ) check if the JS
generated marketing link is working.

results.html check at the .zoom function is working on the images.
making sure that Google Maps are working as intended. \#\#Deployment

How to deploy the code locally?
-------------------------------

If you wish to run this code locally then please follow the instructions
below. Download the code from the Github repository. Click on Clone or
download then Download ZIP. This will download the code into a ZIP
folder locally on your computer. Uncompress the ZIP folder and run with
any browser.

Some resources are externally linked, the application is dependent on
these external resources ( JQuery, Google Maps ) and therefore requires
an internet connection.

Credits
-------

Country Icons made by Free pick from Flaticon
(https://www.flaticon.com/authors/freepik" ).

Photo on start Menu by Dariusz Sankowski on Unsplash. Background on
Start Menu Page (Index.html ) by Bharath on Unsplash.

Photo 1 to 7 from Unsplash. All the other Images are provided by myself

Text for Images 1-7 taken from https://whc.unesco.org/en/list/ Text for
Images 7-30 - Placeholder.

Inspiration and Code example for my project came from this Tutorial
https://www.youtube.com/watch?v=jvk1pFNqXaw&t=1516s
