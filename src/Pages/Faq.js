import React from 'react';
import Header from "../Componants/Header";
import bgFaq from "../Imgs/faq.jpg"
import Question from "../Componants/Question";

const Faq = () => {
    return (
        <div>
            <Header title="Foire aux questions" description="Les questions les plus possées sont disponible plus bas."
                    url={bgFaq}/>
            <Question question="Question 1 ?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tellus a nunc volutpat eleifend in ac quam. Phasellus eu tortor vitae nibh semper convallis id ut felis. Integer in turpis et elit pharetra commodo. Duis vehicula vehicula malesuada. Nulla a ligula sit amet lorem tincidunt auctor nec nec odio. Quisque quis est pellentesque, pretium est in, vulputate odio. Integer porta auctor metus eu luctus. Integer lobortis libero quis turpis dapibus, quis auctor diam vulputate. Pellentesque mi metus, consectetur vitae erat a, pharetra iaculis lacus. Suspendisse potenti. Nam finibus magna a lectus aliquet, vitae pharetra quam mollis. In commodo metus a risus sagittis commodo. Fusce luctus at sem suscipit lacinia. Pellentesque imperdiet ante nec quam aliquam, a auctor quam sagittis. Etiam in sem iaculis, pellentesque turpis eu, posuere massa."/>
            <Question question="Question 2 ?"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tellus a nunc volutpat eleifend in ac quam. Phasellus eu tortor vitae nibh semper convallis id ut felis. Integer in turpis et elit pharetra commodo. Duis vehicula vehicula malesuada. Nulla a ligula sit amet lorem tincidunt auctor nec nec odio. Quisque quis est pellentesque, pretium est in, vulputate odio. Integer porta auctor metus eu luctus. Integer lobortis libero quis turpis dapibus, quis auctor diam vulputate. Pellentesque mi metus, consectetur vitae erat a, pharetra iaculis lacus. Suspendisse potenti. Nam finibus magna a lectus aliquet, vitae pharetra quam mollis. In commodo metus a risus sagittis commodo. Fusce luctus at sem suscipit lacinia. Pellentesque imperdiet ante nec quam aliquam, a auctor quam sagittis. Etiam in sem iaculis, pellentesque turpis eu, posuere massa."/>
        </div>
    );
};

export default Faq;