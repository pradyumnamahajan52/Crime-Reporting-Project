import React from 'react'

export default function Faq() {
  return (
    <div class="w-full min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 transition-transform transform hover:scale-105">
    <div class="max-w-4xl mx-auto bg-white shadow-xl ring-1 ring-gray-900/5 rounded-lg px-6 py-10">
    
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Crime Reporting FAQ</h2>
        <p class="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions about reporting crimes</p>
      </div>
  
      
      <div class="mt-8 divide-y divide-neutral-200">
        <div class="py-5">
          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span> How do I report a crime?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
              You can report a crime by visiting our 'Report Crime' page and filling out the form. Alternatively, you can call the police or emergency services for immediate assistance.
            </p>
          </details>
        </div>
  
        <div class="py-5">
          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span> Can I report a crime anonymously?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
              Yes, we offer an anonymous crime reporting option. Your identity will remain confidential unless you choose to provide your details for further investigation.
            </p>
          </details>
        </div>
  
        <div class="py-5">
          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span> What type of crimes can I report?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
              You can report crimes such as theft, assault, fraud, harassment, cybercrime, and more. If you're unsure, please contact local law enforcement for guidance.
            </p>
          </details>
        </div>
  
        <div class="py-5">
          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span> What happens after I submit a report?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
              Once you submit a report, it will be reviewed by our team and forwarded to the appropriate authorities for investigation. You may be contacted for further details if needed.
            </p>
          </details>
        </div>
  
        <div class="py-5">
          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span> Can I track the status of my report?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
              Yes, if you provide contact information, you can track your report through our system or receive updates from law enforcement regarding the investigation.
            </p>
          </details>
        </div>
  
        <div class="py-5">
          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span> What should I do in an emergency?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
              If you are in immediate danger or witnessing a crime in progress, call emergency services (911 or your local police department) right away.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
  
  )
}
