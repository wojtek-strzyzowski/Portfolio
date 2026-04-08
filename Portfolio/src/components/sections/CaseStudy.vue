<template>
    <section id="case-study" class="section case-study">
      <div class="case-study__inner">
  
        <h2 class="case-study__title">
          Case Study – Role‑Based Business Application
        </h2>
  
        
        <div class="case-study__split">

        <!-- LINKER TEXTBEREICH -->
        <div class="case-study__text">

            <div class="case-study__block">
            <h3>Context</h3>
            <ul>
                <li>Multi‑role internal request process spanning HR and identity services</li>
                <li>Sequential handovers with manual coordination</li>
                <li>Document‑driven workflow with multiple approval steps</li>
                <li>High error potential due to fragmented responsibilities</li>
            </ul>
            </div>

            <div class="case-study__block">
            <h3>Solution Overview</h3>
            <ul>
                <li>Single, centralized application with role‑dependent behavior</li>
                <li>Entry and navigation controlled by contextual access parameters</li>
                <li>Status‑driven workflow orchestration across departments</li>
                <li>Automated document and media handling within the process</li>
            </ul>
            </div>

        </div>

        <!-- RECHTER VISUELLER BEREICH -->
        <div class="case-study__visual">
            <img
            src="/images/PA.png"
            alt="Role-based business application showing centralized single-screen workflow"
            />
            <p class="caption">
            Centralized single‑screen application with role‑dependent behavior and
            status‑driven workflow control.
            </p>
        </div>

        </div>


  
        <div class="case-study__block">
          <h3>Architecture</h3>
          <div class="case-study__architecture">
            <div>Power Apps<br/><span>UI & validation</span></div>
            <div>Power Automate<br/><span>workflow & documents</span></div>
            <div>SharePoint / Dataverse<br/><span>state & files</span></div>
          </div>
        </div>
  
        <div class="case-study__block">
          <h3>Key Decisions</h3>
          <ul>
            <li>Single‑screen design to avoid state fragmentation across screens</li>
            <li>Role handling via deeplink parameters instead of separate apps</li>
            <li>Centralized validation logic to ensure consistent data quality</li>
            <li>Workflow automation outside the UI to keep application logic lean</li>
          </ul>
        </div>
  
        <div class="case-study__block">
          <h3>Outcome</h3>
          <ul>
            <li>Successfully validated by stakeholders across all involved roles</li>
            <li>End‑to‑end process ready for production rollout</li>
            <li>Clear separation of responsibilities between departments</li>
            <li>Reduced manual coordination and error potential</li>
          </ul>
        </div>
  
      </div>
    </section>
  </template>
  