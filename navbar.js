var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar');
div.innerHTML = `

<ul class="navbar-list">

<li class="navbar-item">
  <button class="navbar-link  active" data-nav-link>About</button>
</li>

<li class="navbar-item">
  <a href="resume.html">
  <button class="navbar-link" data-nav-link>Resume</button>
</a>
</li>

<li class="navbar-item">
  <a href="portfolio.html">
  <button class="navbar-link" data-nav-link>Portfolio</button>
  </a>
</li>


<li class="navbar-item">
  <a href="blog.html">
  <button class="navbar-link" data-nav-link>Blog</button>
</a>
</li>

<li class="navbar-item">
    <a href="contact.html">
    <button class="navbar-link" data-nav-link>Contact</button>
    </a>

  
</li>

</ul>

`;
document.getElementById('navbar').appendChild(nav);