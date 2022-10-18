export default function ContactUs(){
    return(
        <div className="container">
            <h1>Contact Us!</h1>

<section class="mb-4">

    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="d-flex flex-row justify-content-center">


        <div class="col-md-auto ">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                <div class="row">


                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"></input>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>



                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"></input>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"></input>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
            </form>
            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
    </div>

</section>

        </div>
        
    );
}