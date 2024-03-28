"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
var countriesFlags = {
  Afghanistan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/af.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/af.png",
  },
  Albania: {
    mini: "http://flags.fmcdn.net/data/flags/mini/al.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/al.png",
  },
  Algeria: {
    mini: "http://flags.fmcdn.net/data/flags/mini/dz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/dz.png",
  },
  Andorra: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ad.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ad.png",
  },
  Angola: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ao.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ao.png",
  },
  Antigua: {
    alias: "Antigua and Barbuda",
    mini: "http://flags.fmcdn.net/data/flags/mini/ag.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ag.png",
  },
  Argentina: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ar.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ar.png",
  },
  Armenia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/am.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/am.png",
  },
  Australia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/au.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/au.png",
  },
  Austria: {
    mini: "http://flags.fmcdn.net/data/flags/mini/at.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/at.png",
  },
  Azerbaijan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/az.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/az.png",
  },
  Bahamas: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bs.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bs.png",
  },
  Bahrain: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bh.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bh.png",
  },
  Bangladesh: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bd.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bd.png",
  },
  Barbados: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bb.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bb.png",
  },
  Belarus: {
    mini: "http://flags.fmcdn.net/data/flags/mini/by.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/by.png",
  },
  Belgium: {
    mini: "http://flags.fmcdn.net/data/flags/mini/be.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/be.png",
  },
  Belize: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bz.png",
  },
  Benin: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bj.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bj.png",
  },
  Bhutan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bt.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bt.png",
  },
  Bolivia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bo.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bo.png",
  },
  Bosnia: {
    alias: "Bosnia and Herzegovina",
    mini: "http://flags.fmcdn.net/data/flags/mini/ba.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ba.png",
  },
  Botswana: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bw.png",
  },
  Brazil: {
    mini: "http://flags.fmcdn.net/data/flags/mini/br.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/br.png",
  },
  Brunei: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bn.png",
  },
  Bulgaria: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bg.png",
  },
  Burkina: {
    alias: "Burkina Faso",
    mini: "http://flags.fmcdn.net/data/flags/mini/bf.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bf.png",
  },
  Burundi: {
    mini: "http://flags.fmcdn.net/data/flags/mini/bi.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/bi.png",
  },
  Cambodia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/kh.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kh.png",
  },
  Cameroon: {
    mini: "http://flags.fmcdn.net/data/flags/mini/cm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cm.png",
  },
  Canada: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ca.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ca.png",
  },
  Verde: {
    alias: "Cape Verde",
    mini: "http://flags.fmcdn.net/data/flags/mini/cv.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cv.png",
  },
  CAR: {
    alias: "Central African Republic",
    mini: "http://flags.fmcdn.net/data/flags/mini/cf.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cf.png",
  },
  Chad: {
    mini: "http://flags.fmcdn.net/data/flags/mini/td.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/td.png",
  },
  Chile: {
    mini: "http://flags.fmcdn.net/data/flags/mini/cl.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cl.png",
  },
  Colombia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/co.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/co.png",
  },
  Comoros: {
    mini: "http://flags.fmcdn.net/data/flags/mini/km.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/km.png",
  },
  Cook: {
    alias: "Cook Islands",
    mini: "http://flags.fmcdn.net/data/flags/mini/ck.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ck.png",
  },
  CostaRica: {
    alias: "Costa Rica",
    mini: "http://flags.fmcdn.net/data/flags/mini/cr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cr.png",
  },
  Ivoire: {
    alias: "Cote d'Ivoire",
    mini: "http://flags.fmcdn.net/data/flags/mini/ci.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ci.png",
  },
  Croatia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/hr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/hr.png",
  },
  Cuba: {
    mini: "http://flags.fmcdn.net/data/flags/mini/cu.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cu.png",
  },
  Cyprus: {
    mini: "http://flags.fmcdn.net/data/flags/mini/cy.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cy.png",
  },
  Czech: {
    alias: "Czech Republic",
    mini: "http://flags.fmcdn.net/data/flags/mini/cz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cz.png",
  },
  DRC: {
    alias: "Democratic Republic of the Congo",
    mini: "http://flags.fmcdn.net/data/flags/mini/cd.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cd.png",
  },
  Denmark: {
    mini: "http://flags.fmcdn.net/data/flags/mini/dk.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/dk.png",
  },
  Djibouti: {
    mini: "http://flags.fmcdn.net/data/flags/mini/dj.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/dj.png",
  },
  Dominica: {
    mini: "http://flags.fmcdn.net/data/flags/mini/dm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/dm.png",
  },
  DR: {
    alias: "Dominican Republic",
    mini: "http://flags.fmcdn.net/data/flags/mini/do.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/do.png",
  },
  Timor: {
    alias: "East Timor",
    mini: "http://flags.fmcdn.net/data/flags/mini/tl.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tl.png",
  },
  Ecuador: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ec.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ec.png",
  },
  Egypt: {
    mini: "http://flags.fmcdn.net/data/flags/mini/eg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/eg.png",
  },
  Salvador: {
    alias: "El Salvador",
    mini: "http://flags.fmcdn.net/data/flags/mini/sv.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sv.png",
  },
  EGuinea: {
    alias: "Equatorial Guinea",
    mini: "http://flags.fmcdn.net/data/flags/mini/gq.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gq.png",
  },
  Eritrea: {
    mini: "http://flags.fmcdn.net/data/flags/mini/er.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/er.png",
  },
  Estonia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ee.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ee.png",
  },
  Ethiopia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/et.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/et.png",
  },
  Fiji: {
    mini: "http://flags.fmcdn.net/data/flags/mini/fj.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/fj.png",
  },
  Finland: {
    mini: "http://flags.fmcdn.net/data/flags/mini/fi.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/fi.png",
  },
  France: {
    mini: "http://flags.fmcdn.net/data/flags/mini/fr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/fr.png",
  },
  Gabon: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ga.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ga.png",
  },
  Gambia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gm.png",
  },
  Georgia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ge.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ge.png",
  },
  Germany: {
    mini: "http://flags.fmcdn.net/data/flags/mini/de.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/de.png",
  },
  Ghana: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gh.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gh.png",
  },
  Greece: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gr.png",
  },
  Grenada: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gd.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gd.png",
  },
  Guatemala: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gt.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gt.png",
  },
  Guinea: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gn.png",
  },
  GuineaB: {
    alias: "Guinea-Bissau",
    mini: "http://flags.fmcdn.net/data/flags/mini/gw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gw.png",
  },
  Guyana: {
    mini: "http://flags.fmcdn.net/data/flags/mini/gy.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gy.png",
  },
  Haiti: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ht.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ht.png",
  },
  Honduras: {
    mini: "http://flags.fmcdn.net/data/flags/mini/hn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/hn.png",
  },
  Hungary: {
    mini: "http://flags.fmcdn.net/data/flags/mini/hu.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/hu.png",
  },
  Iceland: {
    mini: "http://flags.fmcdn.net/data/flags/mini/is.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/is.png",
  },
  India: {
    mini: "http://flags.fmcdn.net/data/flags/mini/in.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/in.png",
  },
  Indonesia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/id.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/id.png",
  },
  Iran: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ir.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ir.png",
  },
  Iraq: {
    mini: "http://flags.fmcdn.net/data/flags/mini/iq.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/iq.png",
  },
  Ireland: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ie.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ie.png",
  },
  Israel: {
    mini: "http://flags.fmcdn.net/data/flags/mini/il.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/il.png",
  },
  Italy: {
    mini: "http://flags.fmcdn.net/data/flags/mini/it.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/it.png",
  },
  Jamaica: {
    mini: "http://flags.fmcdn.net/data/flags/mini/jm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/jm.png",
  },
  Japan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/jp.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/jp.png",
  },
  Jordan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/jo.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/jo.png",
  },
  Kazakhstan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/kz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kz.png",
  },
  Kenya: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ke.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ke.png",
  },
  Kiribati: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ki.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ki.png",
  },
  Kosovo: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ks.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ks.png",
  },
  Kuwait: {
    mini: "http://flags.fmcdn.net/data/flags/mini/kw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kw.png",
  },
  Kyrgyzstan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/kg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kg.png",
  },
  Laos: {
    mini: "http://flags.fmcdn.net/data/flags/mini/la.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/la.png",
  },
  Latvia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/lv.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lv.png",
  },
  Lebanon: {
    mini: "http://flags.fmcdn.net/data/flags/mini/lb.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lb.png",
  },
  Lesotho: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ls.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ls.png",
  },
  Liberia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/lr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lr.png",
  },
  Libya: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ly.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ly.png",
  },
  Liechtenstein: {
    mini: "http://flags.fmcdn.net/data/flags/mini/li.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/li.png",
  },
  Lithuania: {
    mini: "http://flags.fmcdn.net/data/flags/mini/lt.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lt.png",
  },
  Luxembourg: {
    mini: "http://flags.fmcdn.net/data/flags/mini/lu.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lu.png",
  },
  Macedonia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mk.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mk.png",
  },
  Madagascar: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mg.png",
  },
  Malawi: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mw.png",
  },
  Malaysia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/my.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/my.png",
  },
  Maldives: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mv.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mv.png",
  },
  Mali: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ml.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ml.png",
  },
  Malta: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mt.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mt.png",
  },
  Marshall: {
    alias: "Marshall Islands",
    mini: "http://flags.fmcdn.net/data/flags/mini/mh.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mh.png",
  },
  Mauritania: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mr.png",
  },
  Mauritius: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mu.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mu.png",
  },
  Mexico: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mx.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mx.png",
  },
  Micronesia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/fm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/fm.png",
  },
  Moldova: {
    mini: "http://flags.fmcdn.net/data/flags/mini/md.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/md.png",
  },
  Monaco: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mc.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mc.png",
  },
  Mongolia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mn.png",
  },
  Montenegro: {
    mini: "http://flags.fmcdn.net/data/flags/mini/me.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/me.png",
  },
  Morocco: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ma.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ma.png",
  },
  Mozambique: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mz.png",
  },
  Myanmar: {
    mini: "http://flags.fmcdn.net/data/flags/mini/mm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/mm.png",
  },
  Namibia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/na.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/na.png",
  },
  Nauru: {
    mini: "http://flags.fmcdn.net/data/flags/mini/nr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/nr.png",
  },
  Nepal: {
    mini: "http://flags.fmcdn.net/data/flags/mini/np.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/np.png",
  },
  Netherlands: {
    mini: "http://flags.fmcdn.net/data/flags/mini/nl.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/nl.png",
  },
  NZ: {
    alias: "New Zealand",
    mini: "http://flags.fmcdn.net/data/flags/mini/nz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/nz.png",
  },
  Nicaragua: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ni.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ni.png",
  },
  Niger: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ne.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ne.png",
  },
  Nigeria: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ng.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ng.png",
  },
  Niue: {
    mini: "http://flags.fmcdn.net/data/flags/mini/nu.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/nu.png",
  },
  NKorea: {
    alias: "North Korea",
    mini: "http://flags.fmcdn.net/data/flags/mini/kp.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kp.png",
  },
  Norway: {
    mini: "http://flags.fmcdn.net/data/flags/mini/no.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/no.png",
  },
  Oman: {
    mini: "http://flags.fmcdn.net/data/flags/mini/om.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/om.png",
  },
  Pakistan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/pk.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pk.png",
  },
  Palau: {
    mini: "http://flags.fmcdn.net/data/flags/mini/pw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pw.png",
  },
  Panama: {
    mini: "http://flags.fmcdn.net/data/flags/mini/pa.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pa.png",
  },
  PGuinea: {
    alias: "Papua new Guinea",
    mini: "http://flags.fmcdn.net/data/flags/mini/pg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pg.png",
  },
  Paraguay: {
    mini: "http://flags.fmcdn.net/data/flags/mini/py.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/py.png",
  },
  China: {
    alias: "People's Republic China",
    mini: "http://flags.fmcdn.net/data/flags/mini/cn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cn.png",
  },
  Peru: {
    mini: "http://flags.fmcdn.net/data/flags/mini/pe.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pe.png",
  },
  Philippines: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ph.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ph.png",
  },
  Poland: {
    mini: "http://flags.fmcdn.net/data/flags/mini/pl.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pl.png",
  },
  Portugal: {
    mini: "http://flags.fmcdn.net/data/flags/mini/pt.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/pt.png",
  },
  Qatar: {
    mini: "http://flags.fmcdn.net/data/flags/mini/qa.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/qa.png",
  },
  Taiwan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tw.png",
  },
  RC: {
    alias: "Republic of Congo",
    mini: "http://flags.fmcdn.net/data/flags/mini/cg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/cg.png",
  },
  Romania: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ro.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ro.png",
  },
  Russia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ru.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ru.png",
  },
  Rwanda: {
    mini: "http://flags.fmcdn.net/data/flags/mini/rw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/rw.png",
  },
  SKN: {
    alias: "Saint Kitts and Nevis",
    mini: "http://flags.fmcdn.net/data/flags/mini/kn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kn.png",
  },
  SL: {
    alias: "Saint Lucia",
    mini: "http://flags.fmcdn.net/data/flags/mini/lc.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lc.png",
  },
  SVG: {
    alias: "Saint Vincent and the Grenadines",
    mini: "http://flags.fmcdn.net/data/flags/mini/vc.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/vc.png",
  },
  Samoa: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ws.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ws.png",
  },
  SM: {
    alias: "San Marino",
    mini: "http://flags.fmcdn.net/data/flags/mini/sm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sm.png",
  },
  STP: {
    alias: "Sao Tome and Principe",
    mini: "http://flags.fmcdn.net/data/flags/mini/st.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/st.png",
  },
  Arab: {
    alias: "Saudi Arabia",
    mini: "http://flags.fmcdn.net/data/flags/mini/sa.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sa.png",
  },
  Senegal: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sn.png",
  },
  Serbia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/rs.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/rs.png",
  },
  Seychelles: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sc.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sc.png",
  },
  Sierra: {
    alias: "Sierra Leone",
    mini: "http://flags.fmcdn.net/data/flags/mini/sl.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sl.png",
  },
  Singapore: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sg.png",
  },
  Slovakia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sk.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sk.png",
  },
  Slovenia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/si.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/si.png",
  },
  Solomon: {
    alias: "Solomon Islands",
    mini: "http://flags.fmcdn.net/data/flags/mini/sb.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sb.png",
  },
  Somalia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/so.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/so.png",
  },
  RSA: {
    alias: "Republic of South Africa",
    mini: "http://flags.fmcdn.net/data/flags/mini/za.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/za.png",
  },
  SKorea: {
    alias: "South Korea",
    mini: "http://flags.fmcdn.net/data/flags/mini/kr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/kr.png",
  },
  SSudan: {
    alias: "South Sudan",
    mini: "http://flags.fmcdn.net/data/flags/mini/ss.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ss.png",
  },
  Spain: {
    mini: "http://flags.fmcdn.net/data/flags/mini/es.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/es.png",
  },
  Lanka: {
    alias: "Shri Lanka",
    mini: "http://flags.fmcdn.net/data/flags/mini/lk.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/lk.png",
  },
  Sudan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sd.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sd.png",
  },
  Suriname: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sr.png",
  },
  Swaziland: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sz.png",
  },
  Sweden: {
    mini: "http://flags.fmcdn.net/data/flags/mini/se.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/se.png",
  },
  Switzerland: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ch.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ch.png",
  },
  Syria: {
    mini: "http://flags.fmcdn.net/data/flags/mini/sy.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/sy.png",
  },
  Tajikistan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tj.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tj.png",
  },
  Tanzania: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tz.png",
  },
  Thailand: {
    mini: "http://flags.fmcdn.net/data/flags/mini/th.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/th.png",
  },
  Togo: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tg.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tg.png",
  },
  Tonga: {
    mini: "http://flags.fmcdn.net/data/flags/mini/to.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/to.png",
  },
  "Trinidad and Tobago": {
    alias: "Trinidad and Tobago",
    mini: "http://flags.fmcdn.net/data/flags/mini/tt.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tt.png",
  },
  Tunisia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tn.png",
  },
  Turkey: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tr.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tr.png",
  },
  Turkmenistan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tm.png",
  },
  Tuvalu: {
    mini: "http://flags.fmcdn.net/data/flags/mini/tv.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/tv.png",
  },
  Uganda: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ug.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ug.png",
  },
  Ukraine: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ua.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ua.png",
  },
  UAE: {
    alias: "United Arab Emirates",
    mini: "http://flags.fmcdn.net/data/flags/mini/ae.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ae.png",
  },
  UK: {
    alias: "United Kingdom",
    mini: "http://flags.fmcdn.net/data/flags/mini/gb.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/gb.png",
  },
  USA: {
    alias: "United States",
    mini: "http://flags.fmcdn.net/data/flags/mini/us.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/us.png",
  },
  Uruguay: {
    mini: "http://flags.fmcdn.net/data/flags/mini/uy.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/uy.png",
  },
  Uzbekistan: {
    mini: "http://flags.fmcdn.net/data/flags/mini/uz.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/uz.png",
  },
  Vanuatu: {
    mini: "http://flags.fmcdn.net/data/flags/mini/vu.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/vu.png",
  },
  Vatican: {
    alias: "Vatican City",
    mini: "http://flags.fmcdn.net/data/flags/mini/va.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/va.png",
  },
  Venezuela: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ve.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ve.png",
  },
  Vietnam: {
    mini: "http://flags.fmcdn.net/data/flags/mini/vn.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/vn.png",
  },
  Sahara: {
    alias: "Western Sahara",
    mini: "http://flags.fmcdn.net/data/flags/mini/eh.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/eh.png",
  },
  Yemen: {
    mini: "http://flags.fmcdn.net/data/flags/mini/ye.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/ye.png",
  },
  Zambia: {
    mini: "http://flags.fmcdn.net/data/flags/mini/zm.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/zm.png",
  },
  Zimbabwe: {
    mini: "http://flags.fmcdn.net/data/flags/mini/zw.png",
    normal: "http://flags.fmcdn.net/data/flags/normal/zw.png",
  },
};
const countries = [
  {
    country: "India",
    averageIqByCountry_iqLynnBecker2019: 76.24,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "China",
    averageIqByCountry_iqLynnBecker2019: 104.1,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "United States",
    averageIqByCountry_iqLynnBecker2019: 97.43,
    AverageIQ_ICI2017Grade: "A+",
  },
  {
    country: "Indonesia",
    averageIqByCountry_iqLynnBecker2019: 78.49,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Pakistan",
    averageIqByCountry_iqLynnBecker2019: 80,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Nigeria",
    averageIqByCountry_iqLynnBecker2019: 67.76,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Brazil",
    averageIqByCountry_iqLynnBecker2019: 83.38,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Bangladesh",
    averageIqByCountry_iqLynnBecker2019: 74.33,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Russia",
    averageIqByCountry_iqLynnBecker2019: 96.29,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Ethiopia",
    averageIqByCountry_iqLynnBecker2019: 68.42,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Mexico",
    averageIqByCountry_iqLynnBecker2019: 87.73,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Japan",
    averageIqByCountry_iqLynnBecker2019: 106.48,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "Philippines",
    averageIqByCountry_iqLynnBecker2019: 81.64,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Egypt",
    averageIqByCountry_iqLynnBecker2019: 76.32,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "DR Congo",
    averageIqByCountry_iqLynnBecker2019: 64.92,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Vietnam",
    averageIqByCountry_iqLynnBecker2019: 89.53,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Iran",
    averageIqByCountry_iqLynnBecker2019: 80.01,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Turkey",
    averageIqByCountry_iqLynnBecker2019: 86.8,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Germany",
    averageIqByCountry_iqLynnBecker2019: 100.74,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Thailand",
    averageIqByCountry_iqLynnBecker2019: 88.87,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Tanzania",
    averageIqByCountry_iqLynnBecker2019: 74.95,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "United Kingdom",
    averageIqByCountry_iqLynnBecker2019: 99.12,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "France",
    averageIqByCountry_iqLynnBecker2019: 96.69,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "South Africa",
    averageIqByCountry_iqLynnBecker2019: 68.87,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Italy",
    averageIqByCountry_iqLynnBecker2019: 94.23,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Kenya",
    averageIqByCountry_iqLynnBecker2019: 75.2,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Myanmar",
    averageIqByCountry_iqLynnBecker2019: 91.18,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Colombia",
    averageIqByCountry_iqLynnBecker2019: 83.13,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "South Korea",
    averageIqByCountry_iqLynnBecker2019: 102.35,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "Uganda",
    averageIqByCountry_iqLynnBecker2019: 76.42,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Sudan",
    averageIqByCountry_iqLynnBecker2019: 78.87,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Spain",
    averageIqByCountry_iqLynnBecker2019: 93.9,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Iraq",
    averageIqByCountry_iqLynnBecker2019: 89.28,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Algeria",
    averageIqByCountry_iqLynnBecker2019: 76,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Argentina",
    averageIqByCountry_iqLynnBecker2019: 86.63,
    AverageIQ_ICI2017Grade: "B-",
  },
  {
    country: "Afghanistan",
    averageIqByCountry_iqLynnBecker2019: 82.12,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Poland",
    averageIqByCountry_iqLynnBecker2019: 96.35,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Canada",
    averageIqByCountry_iqLynnBecker2019: 99.52,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Morocco",
    averageIqByCountry_iqLynnBecker2019: 67.03,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Ukraine",
    averageIqByCountry_iqLynnBecker2019: 90.07,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Angola",
    averageIqByCountry_iqLynnBecker2019: 75.1,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saudi Arabia",
    averageIqByCountry_iqLynnBecker2019: 76.36,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Uzbekistan",
    averageIqByCountry_iqLynnBecker2019: 89.01,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Yemen",
    averageIqByCountry_iqLynnBecker2019: 62.86,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Mozambique",
    averageIqByCountry_iqLynnBecker2019: 72.5,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Ghana",
    averageIqByCountry_iqLynnBecker2019: 58.16,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Peru",
    averageIqByCountry_iqLynnBecker2019: 81.44,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Malaysia",
    averageIqByCountry_iqLynnBecker2019: 87.58,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Nepal",
    averageIqByCountry_iqLynnBecker2019: 42.99,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Madagascar",
    averageIqByCountry_iqLynnBecker2019: 76.79,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Ivory Coast",
    averageIqByCountry_iqLynnBecker2019: 58.16,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Venezuela",
    averageIqByCountry_iqLynnBecker2019: 82.99,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Cameroon",
    averageIqByCountry_iqLynnBecker2019: 67.76,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Niger",
    averageIqByCountry_iqLynnBecker2019: 70.82,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Australia",
    averageIqByCountry_iqLynnBecker2019: 99.24,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "North Korea",
    averageIqByCountry_iqLynnBecker2019: 98.82,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Syria",
    averageIqByCountry_iqLynnBecker2019: 74.41,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Mali",
    averageIqByCountry_iqLynnBecker2019: 59.76,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Taiwan",
    averageIqByCountry_iqLynnBecker2019: 106.47,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Burkina Faso",
    averageIqByCountry_iqLynnBecker2019: 73.8,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Sri Lanka",
    averageIqByCountry_iqLynnBecker2019: 86.62,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Malawi",
    averageIqByCountry_iqLynnBecker2019: 69.7,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Zambia",
    averageIqByCountry_iqLynnBecker2019: 68.43,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Kazakhstan",
    averageIqByCountry_iqLynnBecker2019: 88.89,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Chile",
    averageIqByCountry_iqLynnBecker2019: 87.89,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Romania",
    averageIqByCountry_iqLynnBecker2019: 86.88,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Chad",
    averageIqByCountry_iqLynnBecker2019: 78.87,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Somalia",
    averageIqByCountry_iqLynnBecker2019: 67.67,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Ecuador",
    averageIqByCountry_iqLynnBecker2019: 78.26,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Guatemala",
    averageIqByCountry_iqLynnBecker2019: 47.72,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Senegal",
    averageIqByCountry_iqLynnBecker2019: 77.37,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Netherlands",
    averageIqByCountry_iqLynnBecker2019: 100.74,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "Cambodia",
    averageIqByCountry_iqLynnBecker2019: 99.75,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Zimbabwe",
    averageIqByCountry_iqLynnBecker2019: 74.01,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Guinea",
    averageIqByCountry_iqLynnBecker2019: 53.48,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Rwanda",
    averageIqByCountry_iqLynnBecker2019: 69.95,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Benin",
    averageIqByCountry_iqLynnBecker2019: 69.71,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Burundi",
    averageIqByCountry_iqLynnBecker2019: 72.09,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Bolivia",
    averageIqByCountry_iqLynnBecker2019: 76.53,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Tunisia",
    averageIqByCountry_iqLynnBecker2019: 79.22,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Haiti",
    averageIqByCountry_iqLynnBecker2019: 82.1,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Belgium",
    averageIqByCountry_iqLynnBecker2019: 97.49,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "Dominican Republic",
    averageIqByCountry_iqLynnBecker2019: 82.05,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Jordan",
    averageIqByCountry_iqLynnBecker2019: 80.7,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "South Sudan",
    averageIqByCountry_iqLynnBecker2019: 58.61,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Cuba",
    averageIqByCountry_iqLynnBecker2019: 83.9,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Honduras",
    averageIqByCountry_iqLynnBecker2019: 62.16,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Sweden",
    averageIqByCountry_iqLynnBecker2019: 97,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Papua New Guinea",
    averageIqByCountry_iqLynnBecker2019: 78.49,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Czech Republic",
    averageIqByCountry_iqLynnBecker2019: 94.92,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "Azerbaijan",
    averageIqByCountry_iqLynnBecker2019: 84.81,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Tajikistan",
    averageIqByCountry_iqLynnBecker2019: 87.71,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Greece",
    averageIqByCountry_iqLynnBecker2019: 90.77,
    AverageIQ_ICI2017Grade: "B-",
  },
  {
    country: "Portugal",
    averageIqByCountry_iqLynnBecker2019: 92.77,
    AverageIQ_ICI2017Grade: "B-",
  },
  {
    country: "Hungary",
    averageIqByCountry_iqLynnBecker2019: 99.24,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "United Arab Emirates",
    averageIqByCountry_iqLynnBecker2019: 82.05,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Belarus",
    averageIqByCountry_iqLynnBecker2019: 101.6,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Togo",
    averageIqByCountry_iqLynnBecker2019: 59.83,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Sierra Leone",
    averageIqByCountry_iqLynnBecker2019: 45.07,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Austria",
    averageIqByCountry_iqLynnBecker2019: 98.38,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "Switzerland",
    averageIqByCountry_iqLynnBecker2019: 99.24,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Laos",
    averageIqByCountry_iqLynnBecker2019: 80.99,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Hong Kong",
    averageIqByCountry_iqLynnBecker2019: 105.37,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "Nicaragua",
    averageIqByCountry_iqLynnBecker2019: 52.69,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Serbia",
    averageIqByCountry_iqLynnBecker2019: 89.6,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Libya",
    averageIqByCountry_iqLynnBecker2019: 80.92,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Paraguay",
    averageIqByCountry_iqLynnBecker2019: 84.04,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Kyrgyzstan",
    averageIqByCountry_iqLynnBecker2019: 79.09,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Bulgaria",
    averageIqByCountry_iqLynnBecker2019: 90.99,
    AverageIQ_ICI2017Grade: "B-",
  },
  {
    country: "Turkmenistan",
    averageIqByCountry_iqLynnBecker2019: 85.86,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "El Salvador",
    averageIqByCountry_iqLynnBecker2019: 69.63,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Republic of the Congo",
    averageIqByCountry_iqLynnBecker2019: 62.97,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Singapore",
    averageIqByCountry_iqLynnBecker2019: 105.89,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Denmark",
    averageIqByCountry_iqLynnBecker2019: 97.83,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Central African Republic",
    averageIqByCountry_iqLynnBecker2019: 62.55,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Slovakia",
    averageIqByCountry_iqLynnBecker2019: 96.32,
    AverageIQ_ICI2017Grade: "B-",
  },
  {
    country: "Finland",
    averageIqByCountry_iqLynnBecker2019: 101.2,
    AverageIQ_ICI2017Grade: "A",
  },
  {
    country: "Liberia",
    averageIqByCountry_iqLynnBecker2019: 45.07,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Norway",
    averageIqByCountry_iqLynnBecker2019: 97.13,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "Palestine",
    averageIqByCountry_iqLynnBecker2019: 77.69,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "New Zealand",
    averageIqByCountry_iqLynnBecker2019: 98.57,
    AverageIQ_ICI2017Grade: "A-",
  },
  {
    country: "Costa Rica",
    averageIqByCountry_iqLynnBecker2019: 88.34,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Lebanon",
    averageIqByCountry_iqLynnBecker2019: 81.7,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Ireland",
    averageIqByCountry_iqLynnBecker2019: 95.13,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "Mauritania",
    averageIqByCountry_iqLynnBecker2019: 59.76,
    AverageIQ_ICI2017Grade: "D-",
  },
  {
    country: "Oman",
    averageIqByCountry_iqLynnBecker2019: 78.7,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Panama",
    averageIqByCountry_iqLynnBecker2019: 79,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Kuwait",
    averageIqByCountry_iqLynnBecker2019: 78.64,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Croatia",
    averageIqByCountry_iqLynnBecker2019: 95.75,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Eritrea",
    averageIqByCountry_iqLynnBecker2019: 68.77,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Georgia",
    averageIqByCountry_iqLynnBecker2019: 84.5,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Mongolia",
    averageIqByCountry_iqLynnBecker2019: 91.03,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Uruguay",
    averageIqByCountry_iqLynnBecker2019: 87.59,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Moldova",
    averageIqByCountry_iqLynnBecker2019: 89.98,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Puerto Rico",
    averageIqByCountry_iqLynnBecker2019: 81.99,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Bosnia and Herzegovina",
    averageIqByCountry_iqLynnBecker2019: 88.54,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Gambia",
    averageIqByCountry_iqLynnBecker2019: 52.68,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Albania",
    averageIqByCountry_iqLynnBecker2019: 81.75,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Jamaica",
    averageIqByCountry_iqLynnBecker2019: 75.08,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Armenia",
    averageIqByCountry_iqLynnBecker2019: 88.82,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Qatar",
    averageIqByCountry_iqLynnBecker2019: 80.78,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Botswana",
    averageIqByCountry_iqLynnBecker2019: 69.45,
    AverageIQ_ICI2017Grade: "D+",
  },
  {
    country: "Lithuania",
    averageIqByCountry_iqLynnBecker2019: 95.89,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Namibia",
    averageIqByCountry_iqLynnBecker2019: 66.19,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Gabon",
    averageIqByCountry_iqLynnBecker2019: 62.97,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Lesotho",
    averageIqByCountry_iqLynnBecker2019: 68.87,
    AverageIQ_ICI2017Grade: "D",
  },
  {
    country: "Guinea-Bissau",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Slovenia",
    averageIqByCountry_iqLynnBecker2019: 98.6,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "North Macedonia",
    averageIqByCountry_iqLynnBecker2019: 81.91,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Latvia",
    averageIqByCountry_iqLynnBecker2019: 94.79,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Equatorial Guinea",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Trinidad and Tobago",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Bahrain",
    averageIqByCountry_iqLynnBecker2019: 83.6,
    AverageIQ_ICI2017Grade: "C-",
  },
  {
    country: "Timor-Leste",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Estonia",
    averageIqByCountry_iqLynnBecker2019: 100.72,
    AverageIQ_ICI2017Grade: "B",
  },
  {
    country: "Mauritius",
    averageIqByCountry_iqLynnBecker2019: 86.56,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Cyprus",
    averageIqByCountry_iqLynnBecker2019: 93.39,
    AverageIQ_ICI2017Grade: "C+",
  },
  {
    country: "Eswatini",
    averageIqByCountry_iqLynnBecker2019: 68.87,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Djibouti",
    averageIqByCountry_iqLynnBecker2019: 68.41,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Reunion",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Fiji",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Comoros",
    averageIqByCountry_iqLynnBecker2019: 77.07,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Guyana",
    averageIqByCountry_iqLynnBecker2019: 83.23,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Bhutan",
    averageIqByCountry_iqLynnBecker2019: 87.94,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Solomon Islands",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Macau",
    averageIqByCountry_iqLynnBecker2019: 99.82,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Luxembourg",
    averageIqByCountry_iqLynnBecker2019: 99.87,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "Suriname",
    averageIqByCountry_iqLynnBecker2019: 90.29,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Montenegro",
    averageIqByCountry_iqLynnBecker2019: 85.78,
    AverageIQ_ICI2017Grade: "C",
  },
  {
    country: "Cape Verde",
    averageIqByCountry_iqLynnBecker2019: 52.5,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Western Sahara",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Malta",
    averageIqByCountry_iqLynnBecker2019: 91.27,
    AverageIQ_ICI2017Grade: "B-",
  },
  {
    country: "Maldives",
    averageIqByCountry_iqLynnBecker2019: 80.54,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Brunei",
    averageIqByCountry_iqLynnBecker2019: 87.58,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Belize",
    averageIqByCountry_iqLynnBecker2019: 62.55,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Bahamas",
    averageIqByCountry_iqLynnBecker2019: 86.99,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Guadeloupe",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Iceland",
    averageIqByCountry_iqLynnBecker2019: 98.26,
    AverageIQ_ICI2017Grade: "B+",
  },
  {
    country: "Martinique",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Mayotte",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Vanuatu",
    averageIqByCountry_iqLynnBecker2019: 93.92,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "French Guiana",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "French Polynesia",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "New Caledonia",
    averageIqByCountry_iqLynnBecker2019: 93.92,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Barbados",
    averageIqByCountry_iqLynnBecker2019: 91.6,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Sao Tome and Principe",
    averageIqByCountry_iqLynnBecker2019: 65.22,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Samoa",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Curacao",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saint Lucia",
    averageIqByCountry_iqLynnBecker2019: 73.68,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Guam",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Kiribati",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Grenada",
    averageIqByCountry_iqLynnBecker2019: 79.34,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Micronesia",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Jersey",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Tonga",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Seychelles",
    averageIqByCountry_iqLynnBecker2019: 78.76,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Aruba",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saint Vincent and the Grenadines",
    averageIqByCountry_iqLynnBecker2019: 63.42,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "United States Virgin Islands",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Antigua and Barbuda",
    averageIqByCountry_iqLynnBecker2019: 70.48,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Isle of Man",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Andorra",
    averageIqByCountry_iqLynnBecker2019: 95.2,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Dominica",
    averageIqByCountry_iqLynnBecker2019: 66.03,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Cayman Islands",
    averageIqByCountry_iqLynnBecker2019: 82.24,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Bermuda",
    averageIqByCountry_iqLynnBecker2019: 93.48,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Guernsey",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Greenland",
    averageIqByCountry_iqLynnBecker2019: 98.89,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Faroe Islands",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Northern Mariana Islands",
    averageIqByCountry_iqLynnBecker2019: 81.36,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saint Kitts and Nevis",
    averageIqByCountry_iqLynnBecker2019: 70.48,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Turks and Caicos Islands",
    averageIqByCountry_iqLynnBecker2019: 84.29,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Sint Maarten",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "American Samoa",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Marshall Islands",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Liechtenstein",
    averageIqByCountry_iqLynnBecker2019: 101.07,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Monaco",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "San Marino",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Gibraltar",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saint Martin",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "British Virgin Islands",
    averageIqByCountry_iqLynnBecker2019: 76.69,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Palau",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Cook Islands",
    averageIqByCountry_iqLynnBecker2019: 83.96,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Anguilla",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Nauru",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Tuvalu",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Wallis and Futuna",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saint Barthelemy",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Saint Pierre and Miquelon",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Montserrat",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Falkland Islands",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Niue",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Tokelau",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Vatican City",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
  {
    country: "Total",
    averageIqByCountry_iqLynnBecker2019: null,
    AverageIQ_ICI2017Grade: null,
  },
];

let shuffled = countries
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .slice(10)
  .map(({ value }) => value);

export default function () {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white text-center py-10">
        Average IQ per country
      </h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={false}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        {shuffled.map((single) => {
          if (
            countriesFlags[single.country] &&
            single.averageIqByCountry_iqLynnBecker2019 &&
            single.AverageIQ_ICI2017Grade
          ) {
            return (
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src={countriesFlags[single.country]["normal"]}
                  className="rounded-lg w-40 aspect-video shadow-lg"
                  alt=""
                />
                <div className="text-lg font-bold">{single.country}</div>
                <div className="flex items-center gap-3 bg-blue-300 rounded-lg">
                  <div
                    className="bg-blue-600 text-white aspect-square p-1 rounded-lg w-10 flex justify-center items-center
                  "
                  >
                    {single.AverageIQ_ICI2017Grade}
                  </div>
                  <div className="text-black pr-3">
                    {single.averageIqByCountry_iqLynnBecker2019} IQ
                  </div>
                </div>
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
}
