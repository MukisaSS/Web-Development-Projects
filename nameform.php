<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form</title>
    </head>

    <body>
        <header>
            <h1>Form</h1>
        </header>

        <main>
            <article>
                <form action="" method="get">
                    <fieldset>
                        <legend>Enter your name</legend>
                        <p>
                            <label for="name">Name:</label>
                            <input type="text" name="name" id="name">
                        </p>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                    </fieldset>
                </form>

                <?php
                    if(isset($_POST['name'])) {
                        $name = htmlspecialchars($_POST['name']);

                        if(empty($name)) {
                            echo("Error: Name cannot be empty");
                        } else {
                            echo("Hello ". $name . "!");
                        }
                    }
                ?>
            </article>
        </main>
    </body>
</html>