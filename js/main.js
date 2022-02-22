var template = [
    
        `{{#.}}
        <article class="reports_item">
        <a href="{{cover}}" target="_blank">
            <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover/>
        </a>
        <footer class="reports_docs"> 
        {{#documents}}
            <div class="reports_titleBox">
                <h3 class="reports_title">
                    <a href="{{url}}" target="_blank">{{title}} <span class="reports_specs">({{file_size}} {{file_type}})</span></a>
                </h3>
            </div<
        {{/documents}}
        </footer>
        </article>
        {{/.}}`
    
]