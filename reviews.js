(()=>{function fixReviews(){const section=document.querySelector('.reviews');if(!section)return;const wrap=section.querySelector('.wrap');if(!wrap)return;
// Remove any previously injected/replacement review grids and any Bark review links.
wrap.querySelectorAll('[data-facebook-reviews-link],[data-facebook-review-grid],.facebook-review-grid,.facebook-reviews-grid,.review-grid').forEach(el=>{if(!el.classList.contains('review-stage'))el.remove()});
wrap.querySelectorAll('a').forEach(a=>{if((a.href||'').includes('bark.com')){const parent=a.closest('[data-facebook-reviews-link],.facebook-review-link,.reviews-link');if(parent)parent.remove();else a.remove()}});
// Keep the original on-site carousel visible.
const stage=wrap.querySelector('#reviewStage,.review-stage');if(stage){stage.style.display='block';stage.hidden=false}
const dots=wrap.querySelector('#dots,.review-dots');if(dots){dots.style.display='block';dots.hidden=false}
const summary=wrap.querySelector('.review-summary');if(summary){summary.style.display='block';summary.hidden=false}
// Add one verified destination for the full Facebook reviews page.
const holder=document.createElement('div');holder.dataset.facebookReviewsLink='1';holder.style.cssText='text-align:center;margin-top:24px';const a=document.createElement('a');a.href='https://www.facebook.com/andrewheaney.dog/reviews/?id=100070747700127&sk=reviews';a.target='_blank';a.rel='noopener';a.textContent='See all reviews on Facebook →';a.style.cssText='display:inline-block;background:#1877f2;color:#fff;text-decoration:none;font-weight:800;padding:14px 22px;border-radius:10px';holder.appendChild(a);wrap.appendChild(holder)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fixReviews);else fixReviews();
// Run once more after other deferred/cached scripts have had a chance to alter the section.
window.addEventListener('load',()=>setTimeout(fixReviews,250));})();