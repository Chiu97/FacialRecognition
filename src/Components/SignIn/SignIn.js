import React from 'react';
import './SignIn.css'

const SignIn = ({onRouteChange}) => {
    return (
        <div>
            <article className="shadow-3 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div >
                            <div 
                                className=" b mr3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                onClick={() => onRouteChange('home')}
                            >Sign In</div>
                            <div 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            onClick={() => onRouteChange('sign-up')}>Register</div>
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
}

export default SignIn;