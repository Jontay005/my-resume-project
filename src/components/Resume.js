import React from 'react';

function Resume() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>John Ndungu</h1>
        <p>Microsoft 365 Administrator | Power Platform Developer</p>
      </header>
      
      <section className="section">
        <h2>Career Objective</h2>
        <p>
          Results oriented Software Engineer with expertise in SharePoint, Power Platform, OneDrive, and Teams. 
          Motivated team player ready to adapt to diverse environments, leveraging skills for the company's benefit.
        </p>
      </section>
      
      <section className="section">
        <h2>Relevant Skills</h2>
        <ul>
          <li>Microsoft 365 | Azure | PowerShell</li>
          <li>SharePoint | Teams | OneDrive</li>
          <li>PowerApps | Power Automate</li>
          <li>Problem Solving Skills | SQL</li>
          <li>Collaboration | Communication</li>
          <li>Troubleshooting | Support</li>
          <li>Leader | Mentor | Trainer</li>
          <li>Server Administration | Jenkins</li>
          <li>Python | C# | SPFx</li>
        </ul>
      </section>
      
      <section className="section">
        <h2>Professional Experience</h2>
        
        <h3>M365 Administrator | Power Platform Developer</h3>
        <p>Ameren, St. Louis, MO | October 2019 – Present</p>
        <ul>
          <li>Redesigned a 2010 access application using PowerApps, boosting efficiency and generating significant time and cost savings at Ameren.</li>
          <li>Created a vote-tracking app for nominated employees utilizing PowerApps.</li>
          <li>Created a Power Automate script for automating 150+ site migrations from Project Online to SharePoint Online, leading to significant licensing fee savings.</li>
          <li>Collaborated with cross-functional teams to migrate accounting validation from on premise to the cloud utilizing Power Automate.</li>
          <li>Assigned licenses in M365, administered user and item permissions in SharePoint.</li>
          <li>Automated site generation by creating and maintaining PowerShell scripts.</li>
          <li>User, Teams, OneDrive, and SharePoint administration on Azure AD.</li>
          <li>Conducted meetings to identify user issues, proposed and implemented new solutions using Azure, Power Platform, and SharePoint.</li>
          <li>Troubleshoot and support SharePoint, Teams, OneDrive, and Azure App issues.</li>
          <li>Conducted SharePoint content migration using Sharegate and Essentials.</li>
          <li>Lead, mentor, and train co-ops in the enterprise content management team.</li>
          <li>Demonstrated a proven ability to work remotely and independently, effectively managing time and priorities to achieve goals.</li>
        </ul>
        
        <h3>SharePoint Administrator | Developer</h3>
        <p>Metropolitan Sewer District, St. Louis, MO | Feb 2016 – Oct 2019</p>
        <ul>
          <li>Developed a C# application that consumed a REST API to return employee assignment data in a user-friendly interface.</li>
          <li>Deployed SharePoint packages to server farm and offered daily support.</li>
          <li>Created SharePoint sites, web parts, lists, views, workflows, and pages while effectively managing user permissions.</li>
          <li>Migration and support for SharePoint 2013 and 2016.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> (314) 489-6486</p>
        <p><strong>Email:</strong> <a href="mailto:johnwakaba@gmail.com">johnwakaba@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/john-ndungu/">linkedin.com/in/john-ndungu/</a></p>
      </section>
      
      <section className="section">
        <h2>Education</h2>
        <p>University of Missouri St Louis, MO | Dec 2015</p>
        <p>Bachelor of Science, Information Systems</p>
        <p>K21 Cloud Academy | Dec 2023</p>
        <p>AZ-900 & AZ-104 Microsoft Certified Azure Admin Associate</p>
        <p>Amazon Web Services | Mar 2023</p>
        <p>AWS Certified Cloud Practitioner</p>
      </section>
    </div>
  );
}

export default Resume;
