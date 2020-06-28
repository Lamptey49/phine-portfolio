const Contact = () =>{
    const template =   
    `
        <div class="form-container">
                    <form method="post" action="mailto:lampteyphinehas70@gmail.com">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" />
                        <textarea col="5" row="4"></textarea>
                        <input type="submit" value="Submit email">
                    </form>
        </div>
    `;
    return template;
}

export default Contact;