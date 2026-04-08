<template>
    <section id="mini-case-budget" class="section mini-case">
  
      <div class="mini-case__inner">
  
        <h2 class="mini-case__title">
          Mini Case – Budget Planning System with Role‑Aware Calculations
        </h2>
  
        <div class="mini-case__block">
          <h3>Context</h3>
          <ul>
            <li>Organization-wide budget planning across teams, departments and business units</li>
            <li>Hierarchical access with different visibility and responsibility levels</li>
            <li>Budget validity dependent on changing employment percentages over time</li>
          </ul>
        </div>
  
        <div class="mini-case__block">
          <h3>Solution</h3>
          <ul>
            <li>Centralized budget model with clearly defined yearly planning cycles and budget states</li>
            <li>Server‑side automation used to enforce state transitions and generate subsequent budget instances</li>
            <li>Role‑aware calculations based on hierarchical access scopes rather than client‑side logic</li>
            <li>Time‑weighted calculations reflecting employment changes during the year</li>
          </ul>
        </div>
  
        <div class="mini-case__block">
          <h3>Key Decisions</h3>
          <ul>
            <li>Budget lifecycle transitions executed via backend automation to prevent client‑side manipulation</li>
            <li>New budget instances created automatically based on locked predecessor states</li>
            <li>Calculations derived from normalized time segments instead of static annual values</li>
            <li>Complex calculations externalized from the UI to guarantee deterministic and auditable results</li>
          </ul>
        </div>
  
        <div class="mini-case__block">
          <h3>Outcome</h3>
          <ul>
            <li>Reliable and traceable budget calculations across complex employment models</li>
            <li>Clear separation of responsibility between team, department and business level</li>
            <li>Scalable foundation for organization‑wide budget planning</li>
          </ul>
        </div>
  
      </div>
  
    </section>
  </template>
  ``