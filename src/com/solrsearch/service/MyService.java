package com.solrsearch.service;

import com.solrsearch.bean.Jsgs;

import java.util.List;

/**
 * Created by NoControl on 2018/4/23.
 */
public interface MyService {
    public List<Jsgs> searchByKey(String solrKey, String solrValue);
}