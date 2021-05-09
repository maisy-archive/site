<script>
    import GithubLogo from "/src/components/githubLogo.svelte";
    import PageTitle  from "/src/components/pageTitle.svelte"
</script>

<body>
    <!--Site credits title-->
    <PageTitle>
        <span slot="title">
              Site credits
          </span>
          <span slot="subtitle">
              People who helped make this site possible.
          </span>
    </PageTitle>
    
    <!--Contributor Heading-->
            <div id="contrib" class="contrib">
                <h3>rem-my (rem)</h3>
                <div>Initial idea and main development</div>
            </div>
    
    <!--Contributor Heading-->
            <div id="contrib" class="contrib">
                <h3>Yellowsink</h3>
                <div>Project cards design <GithubLogo user="cainy-a" repo=""/></div>
            </div>
</body>