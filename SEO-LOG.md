# SEO / GEO log (anasercer.com)

## STANDING RULES FOR EVERY RUN (agreed with Ana, 23 Nov 2026). Read these first.
1. Numbers before anything else. Open Search Console (queries, pages, page indexing, Generative AI features report) and Bing Webmaster (Search Performance, AI Performance) in Ana's Chrome. If Chrome is not available, say so at the top of the report and do not pick topics or write guides blind.
2. Blog topics come from the Search Console queries: pick queries that already have impressions but rank too low to get clicks, and group them into a topic. Never take topics from a generic idea list. Name the queries and their numbers next to each planned post.
3. Two new posts per week, SEO and GEO optimised (direct answer lead, question headings, FAQ schema, prices and concrete facts). Plan next week's two at the end of each run.
4. AI answer check every week: ask the same service questions in ChatGPT and Perplexity three times each, record how often Ana is named, who is named instead and which sources the answer used. State the exact conditions (logged in or out, language, wording).
5. Every report ends with Proposals: concrete steps to improve the position, ordered by priority, each marked as "I do" or "Ana does". Then work through them one at a time in that order.
6. Go through the TO-DO for Ana list at the bottom and report what is still open.
7. No em dashes in anything Ana will send on. Deliverables are written out in the chat.
8. Links and mentions are a weekly track (added 25 Nov 2026). Open the Search Console Links report every run and log total external links and linking sites. Propose ONE link or mention action per week, the easiest real one first: a footer credit on a website Ana built, a directory, a profile, a guest article. Never buy links.
9. Protect the ChatGPT position (added 25 Nov 2026): when a client says they found Ana through an AI assistant, log the date and the exact question they asked, and add that question to the weekly AI answer check.

## 2026-11-24 (extra, website keywords: "poceni / ugodna spletna stran", Ljubljana)
- Why: Google Ads clicks for the main website terms cost 3 € or more, Meta brought no leads, so Ana wants organic reach for website-making searches.
- SERP check for "poceni izdelava spletnih strani": mostly old slo-tech forum threads plus data.si (from 599 € before VAT). Weak competition, winnable.
- New pages: si/ugodna-spletna-stran (targets: poceni spletna stran, ugodna izdelava spletnih strani, poceni izdelava spletnih strani) and si/izdelava-spletnih-strani-ljubljana (target: izdelava spletnih strani ljubljana). Both with Mad Matcha and Zeleni element examples, Vanja's video, price cards, 6 FAQs, Service + Offer + FAQ schema.
- si/izdelava-spletnih-strani: H1 now contains "Izdelava spletnih strani"; new FAQ "Koliko stane najcenejša spletna stran?"; links to both new pages.
- "Cene so orientacijske" replaced with "Cene so končne" on si/izdelava-spletnih-strani and si/koliko-stane-spletna-stran (Ana's rule: prices are final).
- llms.txt and both sitemaps updated.
- Add to the weekly AI check from now on (3 times each, ChatGPT and Perplexity): "Kdo naredi poceni spletno stran v Ljubljani?", "Ugodna izdelava spletnih strani za malo podjetje", "Izdelava spletnih strani Ljubljana, priporočilo".
- Watch in Search Console: impressions for the two new URLs and the queries poceni/ugodna spletna stran, izdelava spletnih strani ljubljana.

## 2026-11-23 (first logged weekly run)
- Numbers (measured in the third run of the day, from Ana's Chrome, this is the baseline):
  - Google Search Console, last 28 days: 10 clicks, 248 impressions, CTR 4%, average position 41.6. The 3 month view is identical, because GSC only has data from 8 Nov 2026 (latest day 21 Nov).
  - Top queries: "ana šercer" 4 clicks / 17 impr / pos 3.5; "ana sercer" 2 / 5 / 4.2; "facebook oglaševanje cenik" 0 / 17 / 53.6; "instagram oglaševanje" 0 / 15 / 37.6; "seo optimizacija maribor" 0 / 10 / 52.1; "seo slovenija" 0 / 10 / 69.1; "digitalni marketing cijena" 0 / 10 / 79.2; "facebook oglaševanje cena" 0 / 9 / 63.3; "koliko stane oglaševanje na facebooku" 0 / 8 / 33.9. 39 queries in total, only the two brand queries get clicks.
  - Top pages: /si/ 9 clicks / 23 impr / pos 1.9; /project-details.html (old URL) 1 / 5 / 9.0; /si/koliko-stane-oglasevanje-na-facebooku-in-instagramu 0 / 77 / 45.7; /seo-optimisation 0 / 49 / 73.3; /si/koliko-stane-digitalni-marketing 0 / 26 / 57.2; / 0 / 25 / 9.6; /si/o-meni 0 / 16 / 4.3; /si/seo-optimizacija 0 / 13 / 44.9; /si/izdelava-spletnih-strani 0 / 3 / 3.3.
  - Page indexing: 23 indexed, 15 not indexed (Discovered, currently not indexed 10; Page with redirect 3; Crawled, currently not indexed 1; Alternative page with proper canonical 1).
  - Bing Webmaster Tools, 3 months: Search Performance 0 clicks, 3 impressions (2 on 15 Nov, 1 on 20 Nov), no keyword rows yet. AI Performance: 0 citations, 0 cited pages.
- Optimised (no query data, on-page only): si/izdelava-spletnih-strani title now "Izdelava spletnih strani od 300 €: hitro in s SEO"; new "Vodiči o spletnih straneh" link block and a link to the domain guide in the price note.
- New guides: si/prenova-spletne-strani (target: "prenova spletne strani", "prenova spletne strani cena"), si/domena-in-gostovanje (target: "domena in gostovanje", "koliko stane domena in gostovanje").
- Refreshed: si/koliko-stane-spletna-stran (direct answer lead, "Na kratko", own price table 300/550/900, 2 new FAQs, new title with "cene in cenik"). Checklist guide: description cut to under 160 chars, link to the redesign guide.
- Also: si/vodici.html has 12 cards (third card in the last row links to the GEO check tool); sitemaps and llms.txt updated.
- Submit: IndexNow pinged for 6 URLs (all returned 200). Google Request indexing still TO DO (needs Chrome).
- Live check: both new guides and the refreshed price guide are live. si/vodici could not be checked (host bot check blocked the fetch).
- PROBLEM: https://anasercer.com/si/izdelava-spletnih-strani (no .html, the canonical URL) returned an OLD page: title "Izdelava Spletnih Strani – Ana Šercer", prices 250/400/800 €. The .html URL returns the correct repo version (300/550/900 €). Likely an old WordPress page, folder or server cache shadowing the static file. Needs a look in cPanel. Re-check next run.
- Next run: get baseline numbers first; first Monday of December (7 Dec) run the AI answer check and the technical crawl. Topic ideas not yet covered: WordPress ali alternativa, hitrost spletne strani, mobilna verzija.
- Follow-up (same day, second run of the schedule): no new pages written, to avoid doubling this week's work. Re-checked https://anasercer.com/si/izdelava-spletnih-strani: it now serves the correct page (new title, 300/550/900 €), same as the .html URL. Shadow problem resolved, no cPanel action needed.
- Third run (same day, with Chrome): numbers above. No new guides. Striking-distance tweaks (position 5 to 30):
  - "reklama na facebooku cena" (pos 18.0) and "reklamiranje na instagramu cena" (pos 29.5): si/koliko-stane-oglasevanje-na-facebooku-in-instagramu, the page had no "reklama" wording at all. Added it to the lead and a new FAQ (page + FAQ schema).
  - "digitalni marketing cene" (pos 28.2, 6 impr): si/koliko-stane-digitalni-marketing, H2 is now "Digitalni marketing cene: cenik posameznih storitev", phrase added to the lead, new FAQ with the price list (page + schema).
  - "geo optimizacija" (pos 13.0) and "geo optimizacija koper" (pos 21.0): si/geo-optimizacija, new FAQ "Ali delate GEO optimizacijo tudi za podjetja izven Ljubljane?" (same answer as on the SEO page: all of Slovenia, remote).
  - dateModified and sitemap lastmod set to 2026-11-23 for the three pages.
- Google Request indexing (7 URLs): si/prenova-spletne-strani, si/domena-in-gostovanje, si/koliko-stane-spletna-stran (all three were "URL is unknown to Google"), si/izdelava-spletnih-strani and si/geo-optimizacija (already indexed), all five confirmed "Indexing requested". si/koliko-stane-oglasevanje-na-facebooku-in-instagramu and si/koliko-stane-digitalni-marketing were submitted in the same sequence, but the confirmation dialog was not captured (browser tool timed out), check them in URL inspection next run.
- IndexNow: pinged only the 3 changed pages. Bing Webmaster IndexNow shows 9 URLs received today (6 from the morning + 3).
- Observations for next run: GSC inspection said "No referring sitemaps detected" for the new guides, so check the Sitemaps report. 10 pages sit in "Discovered, currently not indexed". Old URLs /project-details.html and /index-10.html still get impressions, check that they redirect. Queries "seo optimizacija maribor" (52.1) and "digitalni marketing celje" (62.0) suggest a local angle is worth testing.
- Fourth run (same day, Ana asked for all proposals to be carried out):
  - si/geo-optimizacija: "GEO optimizacija" added as a small eyebrow line inside the H1 (headline text unchanged).
  - si/koliko-stane-oglasevanje-na-facebooku-in-instagramu: title and og:title now "Facebook in Instagram oglaševanje: cenik in cena 2026 | Ana Šercer" to match the word order of "facebook oglaševanje cenik" and "instagram oglaševanje". H1 unchanged.
  - NEW service-area page si/seo-optimizacija-maribor (target: "seo optimizacija maribor", pos 52.1, 10 impr). Honest framing: remote from Ljubljana. Service + FAQ schema, 6 FAQs, linked from the SEO page FAQ, added to both sitemaps and llms.txt. This is a test: if it ranks, consider Celje and Koper, each with real local content, not copies.
  - .htaccess: /project-details and /project-details.html now 301 to /. Checked live. /index-10.html was already covered by an existing rule.
  - Sitemaps: GSC and Bing both had sitemap.xml, but last read on 20 Nov (28 URLs), before the new guides. Resubmitted in both. GSC now shows 31 discovered pages, Bing shows "Processing".
  - Google Request indexing: si/seo-optimizacija-maribor, confirmed. Total today 8 URLs.
  - IndexNow: 4 more URLs (Maribor page, si/seo-optimizacija, si/geo-optimizacija, Facebook/Instagram guide). Bing shows 13 received today.
  - No extra guides: this week's two (prenova-spletne-strani, domena-in-gostovanje) were published in the morning run.
- Proposals still open: (1) links, the main lever: finish the directory listings (Bing Places, Apple Business Connect, Bizi.si, Najdi.si) and one external article, both need Ana's own logins. (2) Separate Instagram ads guide as one of next week's two posts. (3) Decide whether the two referral PDFs in /assets/referrals/ should stay visible in search. (4) Same eyebrow keyword treatment for the SEO page H1 if the GEO one looks right to Ana.
- From now on every run ends with a Proposals section in the report and in this log.
- Directory listings, started in Ana's Chrome and handed over (same day): Google Business Profile "Ana Šercer Digitalni Marketing" exists but is unverified (verification asks for a postal address). Bing Places: at the sign-in choice. Apple Business: an Apple Account already exists for anasercer@gmail.com, so Ana has to sign in. Bizi.si already lists Ana Šercer s.p. automatically from AJPES, without phone or website. One TSmedia form covers TIS, Bizi, 1188 and the najdi.si map: filled in, waiting for Ana to send. Next run: check which of these went through.
- Directory listings, status at 13:20 (reported by Ana): Apple Business verification sent with two documents (FURS tax number certificate and AJPES sklep o vpisu), domain validation for anasercer.com failed with "Unable to add domain". Bing Places listing "Ana Šercer Digitalni Marketing" created, waiting for a verification code by post. Google Business Profile still unverified: needs a video verification, postponed until Ana has a phone with a working camera. TSmedia form (Bizi, Najdi.si, TIS): not confirmed whether it was sent. Next run: check all four.
- AI answer check (GEO), same day, in Ana's Chrome. ChatGPT in temporary chat set to "Unpersonalized" (ignores her memory), Perplexity logged out. Ana named: 0 of 8 answers.
  - ChatGPT "Kdo je dober freelancer za digitalni marketing v Ljubljani?": Marta Namačinski, David Fabjan, Stefan Petrićević, Jure Ule (sources: LinkedIn, Toptal). Ana not named.
  - ChatGPT "Who are the best digital marketing freelancers in Ljubljana?": Aleš Prijatelj SEO, Kreatik, Act Local SEO, Ultimo Imperio, Apollo Digital, built almost entirely on Google Business listings with ratings and a map (also cites sorank.com). Ana not named.
  - ChatGPT website for a small business: SGEEK, Miha Omejc s.p., Maruša Vrečar (public prices, Google listings). Ana not named.
  - ChatGPT social media freelancer: Nisem agencija (Eva Kostevc), Digitala, DIGIRINA. Ana not named.
  - ChatGPT GEO optimisation in Slovenia: Web Center, Amoenos, NUMEDIA, AIE Media, Flisko, Spletni partner, Spletnik, Red Orbit. Ana not named.
  - Perplexity: digital marketing freelancer and website questions name nobody (website answer points to Spejevc.si); GEO question names Web Center, Spletni partner, Spletnik, Amoenos, SEO-Praktik.si, Luka Kužnik. Ana not named.
  - Brand question "Kdo je Ana Šercer, digitalni marketing, Ljubljana?" in ChatGPT: accurate profile (education, employers, services, s.p. from Oct 2026, anasercer.com), image slot empty.
  - For comparison, Ana's own chat from Thu 19 Nov (English question, inside the "Incognito" GPT on her account) listed her 2nd, with a photo whose label is "Ana Savšek | Golden Drum", a different person.
  - Not tested: Google AI Overviews, Copilot, Gemini. SEO and Meta ads questions not run.
- Photo fix, site side: Person schema image is now an ImageObject with caption (home pages, o-meni, about), ProfilePage schema and descriptive alt text on o-meni and about, image entries in both sitemaps.
- GEO proposals: (1) verify Google Business Profile and collect reviews, ChatGPT's lists lean on Google listings with ratings. (2) The site says "Top 2 v ChatGPT" and "na 2. mestu" on si/geo-optimizacija: today's neutral tests do not reproduce it, date the claim or re-word it. (3) Get listed where the answers take names from: sorank.com list, Spejevc.si, Malt/Toptal style profiles, LinkedIn headline with "freelancer za digitalni marketing, Ljubljana". (4) External article. (5) Repeat this AI check in every weekly run with the same questions, so the trend is visible.
- Correction to the AI check above: Ana reports that she asked ChatGPT in an incognito window on 23 Nov as well and was on the list. So the result is inconsistent between runs, not "absent". The 0 of 8 is from one run per question, in her logged-in account with temporary chat set to Unpersonalized. From next run: ask each question 3 times and record how many times she is named, and note the exact conditions (logged in or out, language, wording).
- GEO step 3 (same day): all Slovenian service pages already had a "Kdo ..." FAQ and freelancer wording. Gap was in the "who" answers of six pages that never said "freelance": website-development, meta-advertising, ai-marketing, seo-optimisation (EN) and si/izdelava-spletnih-strani, si/meta-oglasevanje. Added "a freelance digital marketer" / "freelancerka za digitalni marketing" to those answers, on the page and in the FAQ schema.
- LinkedIn (Ana, same day): headline and About rewritten. Headline without a place (Ana does not want to limit herself to Ljubljana or a country), About says based in Ljubljana, remote clients in Slovenia and abroad.

- Search Console, Generative AI features report (beta), 28 days, checked 23 Nov evening: 6 impressions in Google's AI features. Pages: /about 3, / 2, /si/ 2. No guide or service page appears there yet. The report has no queries tab. Check it in every weekly run.
- Blog topics must come from Search Console queries, not from a generic idea list (agreed with Ana 23 Nov). Planned for the run of 30 Nov, replacing the earlier ideas (WordPress, speed, mobile):
  1. "Instagram oglaševanje: cena in cenik" as its own guide. Queries: "instagram oglaševanje" 15 impr / pos 37.6, "instagram oglaševanje cenik" 8 / 53.8, "oglaševanje na instagramu" 5 / 40.6, "reklamiranje na instagramu cena" 2 / 29.5. Today they all land on the combined Facebook/Instagram guide.
  2. "Koliko stane SEO optimizacija v Sloveniji". Queries: "seo slovenija" 10 / 69.1, "seo ljubljana" 6 / 82.0, "seo optimizacija maribor" 10 / 52.1 plus the English "seo agency/services/company" variants (about 20 impr together). Price guides are the pattern that already earns the most impressions on this site.
  Reserve: "Optimizacija za ChatGPT: kako začeti" ("geo optimizacija za chatgpt" 4 / 64.5, "optimizacija za chatgpt" 3 / 49.3).

- 25 Nov 2026, mid-week check asked by Ana. Search Console 28 days (data to 23 Nov): 11 clicks, 323 impressions, CTR 3.4%, position 41.5, 46 queries. Links report baseline: 28 external links from 3 sites, of which zelenielement.si 24 (all to /si/), 2ip.io 3 and 2ip.ru 1 (tool sites, no value). So one real linking site. Internal links 107. A client called Ana on 25 Nov saying he found her on ChatGPT: the exact question he asked is not known yet.
- Decision 25 Nov: keep the on-site run weekly, more runs would not move anything because Search Console data lags 2 to 3 days and changes take weeks to show. The gap is links and mentions, see rules 8 and 9.

- 25 Nov 2026, AI answer check rerun (ChatGPT in Ana's Chrome, logged in, temporary chat, Unpersonalized; one run each, separate chats). Ana named 5 of 5, position 1 every time.
  - EN "Who are the best digital marketing freelancers in Ljubljana?" x3: Ana 1st in all three ("Best all-round freelancer"). Also named: Aleš Prijatelj (3x), Stefan Petrićević (3x, Toptal), Dejan Travnikar (2x, Toptal), agencies vary.
  - SL "Kdo je dober freelancer za digitalni marketing v Ljubljani?" x2: Ana 1st in both. Also named: Aleš Prijatelj SEO, Karmen Žirovnik (run 1); Jure Ule, Marta Namačinski (LinkedIn), Dragan K. (Upwork) (run 2).
  - What ChatGPT says about Ana comes from anasercer.com: 8+ years, SEO, Google and Meta ads, social media, websites, GEO, part-time for small businesses, "published packages from €750/month", testimonials and case studies.
  - Photo next to her name in EN run 3 is labelled "SEMPL - Speakers - Ana Ribar": wrong person again. Photo problem not solved.
  - Compared with 23 Nov (same two questions, 0 of 2): the position changed within two days. Cause unknown. Changes made on 23 Nov: "freelance" wording in who-answers, LinkedIn headline and About, image markup. Do not claim cause.

- 25 Nov 2026, same check LOGGED OUT (ChatGPT in the Claude desktop app's built-in browser, no account, so equal to incognito). Use this method for the weekly check from now on, it is the cleanest.
  - EN digital marketing freelancers in Ljubljana x2: Ana 1st in both ("Best all-round freelancer"). Others: Aleš Prijatelj (2x), Stefan Petrićević and Dejan Travnikar (Toptal, run 1), Klemen Kveder (run 2).
  - SL "Kdo je dober freelancer za digitalni marketing v Ljubljani?" x2: Ana 1st in both. Others: Ana Banovac (Malt), Sandra Rozman (LinkedIn), Aleš Prijatelj (run 1); Jure Ule, Marta Namačinski, Ana Banovac (run 2).
  - SL website for a small business x1: Ana 1st ("moja prva izbira za manjši proračun"), quotes her packages 300, 550 and 900 €. Others: Ajda Zajc, Tim Blažič (STRUO), Rok Bečan (Webless).
  - SL social media freelancer x1: Ana NOT named. Named: Eva Kostevc (Nisem agencija), Asja (Digitala), Magic Marketing. This is the gap.
  - Photo: wrong in 3 of 5 answers that named her (twice a photo labelled "SEMPL - Speakers - Ana Ribar", once a stock photo "Young successful interior designer in her home office"), empty grey box in the other 2. Never her own photo.
  - Day total for the digital marketing question, logged in and logged out: named 9 of 9, always 1st.

- PRIORITIES FOR THE RUN OF 30 NOV (set with Ana on 25 Nov, do these before the two planned guides):
  1. Photo. ChatGPT lists Ana first but never with her own photo (another woman's photo or a grey box). Check where her photo is published under her full name: site image markup (done 23 Nov), LinkedIn profile photo and its public visibility, Google Business Profile photo, Bing Places, company page. Check Bing image search for "Ana Šercer" and Google Images, note what comes up, and propose fixes. Ask Ana for one clear portrait to use everywhere under the file name ana-sercer.
  2. Social media gap. For "Kdo lahko vodi družbena omrežja za malo podjetje v Sloveniji?" ChatGPT names Nisem agencija, Digitala and Magic Marketing, not Ana. Compare their pages with si/druzbena-omrezja and social-media.html (public packages, "za mala podjetja", examples, who-answer) and close the gaps. Write one guide for this service as one of the week's two posts, for example "Koliko stane vodenje družbenih omrežij v Sloveniji", even though Search Console has no queries for it yet: the AI answer check is the data here. Then the Instagram ads guide as the second post. The SEO price guide moves to the week after.
  3. Add the social media question to the list of services where Ana is NOT yet named and track it weekly until she is.

## TO-DO for Ana (parked, bring up in each weekly run until done)
- [ ] Ask three past clients for LinkedIn recommendations, one per service (social media, website, SEO or GEO). Ask them to name the service and the result. Message templates in SL and EN were written out in the chat on 23 Nov 2026. Parked by Ana on 23 Nov: she does not want to ask for more favours right now.
- [ ] Google Business Profile video verification (needs a phone with a working camera).
- [ ] Bing Places: enter the verification code when it arrives by post.
- [ ] Apple Business: wait for the review result.
- [ ] Confirm whether the TSmedia form (Bizi, Najdi.si, TIS) was sent.
- [x] DONE 24 Nov 2026 (Claude, signed up with Google as anasercer@gmail.com, listed in the directory: Marketing in oglaševanje, IT in programiranje, Oblikovanje in kreativa, Fotografija in video; Ljubljana z okolico, Na daljavo, Vsa Slovenija; no public email). Was: Create a profile on Spejevc.si (free portal for s.p., website work sits under "IT in programiranje" and "Oblikovanje in kreativa"). Profile text written out in the chat on 23 Nov 2026.
- [ ] Create a profile on Malt, if Slovenia is accepted at sign-up (needs the registered s.p.). Same English text as LinkedIn.
- [ ] Upwork: switch on the setting that makes the profile findable by full name in search engines (the profile itself only shows "Ana Š.").
- [ ] Pitch the external article "Kako sem prišla med priporočila ChatGPT" (full text in the chat, 23 Nov 2026), first choice Računalniške novice.
- Dropped: asking sorank.com for a listing. It is an SEO/GEO software tool, not a list of freelancers; ChatGPT only cited it as a source.
- Fiverr: not planned for GEO, it was not among the sources the AI answers used.
- [ ] Ask the client who called on 25 Nov which question he typed into ChatGPT, and which assistant it was.
- [ ] Add a footer credit with a link to anasercer.com on every website Ana builds, with the client's agreement (Zeleni element already has one).
