import { useState, useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const BootScreen = ({ onFinish }) => {
    const containerRef = useRef(null);

    const [memory, setMemory] = useState(0);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.call(() => {
                const dotsEl = containerRef.current.querySelector(".dots");
                const doneEl = containerRef.current.querySelector(".done");

                gsap.to(
                    { value: 0 },
                    {
                    value: 15,
                    duration: 5,
                    ease: "none",
                    onUpdate: function () {
                        const val = Math.floor(this.targets()[0].value);
                        if (dotsEl) {
                        dotsEl.textContent = ".".repeat(val);
                        }
                    },
                    onComplete: () => {
                        if (doneEl) {
                        doneEl.textContent = " Done.";
                        }
                    },
                    }
                );
            });

            tl.fromTo(
                ".boot-logo",
                {opacity: 0},
                {
                    opacity: 1,
                    duration: 0.05,
                    repeat: 5,
                    yoyo: true,
                    ease: "power1.inOut",
                }
            )

            tl.to(".boot-logo", {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            });

            tl.from(".boot-line", {
                opacity: 0,
                y: 8,
                duration: 0.3,
                stagger: 0.15,
                ease: "power1.out",
            });

            tl.to(
                { value: 0 },
                {
                    value: 3584,
                    duration: 4,
                    ease: "power1.out",
                    onUpdate: function () {
                        setMemory(Math.floor(this.targets()[0].value));
                    },
                    onComplete: () => {
                        tl.to(".ok", { opacity: 1 });
                    }
                }
            );

            if (onFinish) {
                tl.call(() => onFinish(), [], "+=1");
            }
        },
        { scope: containerRef }
    );

  return (
    <div ref={containerRef} className='flex py-4 h-full px-7 w-full flex-col gap-4'>
      <img 
        src='Megatrend.jpeg'
        className='w-100 boot-logo'
      />
        <div className='text-3xl flex flex-col opacity-70'>
            <h1>Boot Screen</h1>
            <p className='boot-line'>AMIBIOS(C) 2007 American Megatrends, Inc.</p>
            <p className='boot-line'>ASUS P5KPL ACPI BIOS Revision 0603</p>
            <p className='boot-line'>CPU: Intel (R) Pentium(R) Dual CPU E2180 @ 2.00GHz</p>
            <p className='ml-3 boot-line'>Speed: 2.51GHz     Count: 2</p>

            <p className='boot-line mt-7'>Press DEL to run Setup</p>
            <p className='boot-line'>Press F1 to enter BIOS Setup</p>
            <p className='boot-line'>DDR2-667 in Dual-Channel Interleaved Mode</p>
            <p>
                Initializing USB Controllers
                <span className='dots'></span>
                <span className='done'></span>
            </p>
            <p className='mt-4'>Memory: {memory}MB <span className='ok opacity-0'>OK</span></p>
        </div>
        <div className='text-3xl flex mt-20 flex-col opacity-50'>
            <p>(C) American Megatrends, Inc.</p>
            <p>64-0603-000001-00101111-022908-Bearlake-A0820000-Y2KC</p>
        </div>
    </div>
  )
}

export default BootScreen