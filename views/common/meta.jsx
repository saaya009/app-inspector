/* ================================================================
 * app-inspector by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Jul 27 2016 10:57:58 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

const React = require('react');

class Meta extends React.Component {
  render() {
    return (
      <head>
        <meta charSet="UTF-8"/>
        <meta name="description" content=""/>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
        <title>{this.props.page.title}</title>
        <link rel="shortcut icon" href="//xudafeng.github.io/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/stylesheet/index.css"/>
        <script src="/jquery/dist/jquery.min.js"></script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <script src="/bootstrap/js/bootstrap-treeview.js"></script>
      </head>
    );
  }
}

module.exports = Meta;
