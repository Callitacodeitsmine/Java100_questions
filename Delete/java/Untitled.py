from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

# Set up Chrome WebDriver
driver_path = "www.edge.com"  # e.g., /usr/local/bin/chromedriver
driver = webdriver.Chrome(executable_path=driver_path)

# List of 12 search queries
search_queries = [
    "Selenium automation", "Python web scraping", "React.js tutorial",
    "Node.js vs Python", "AI in education", "Latest in tech 2024",
    "Machine learning basics", "Web development trends",
    "Blockchain use cases", "Cloud computing benefits",
    "Cybersecurity 2024", "DevOps best practices"
]

# Open Google and perform searches
for i, query in enumerate(search_queries):
    if i == 0:
        # Open Google for the first query
        driver.get("https://www.google.com")
    else:
        # Open new tab for subsequent searches
        driver.execute_script("window.open('');")
        driver.switch_to.window(driver.window_handles[i])
        driver.get("https://www.google.com")
    
    # Find the search box, enter the query, and perform the search
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys(query)
    search_box.send_keys(Keys.RETURN)
    
    # Pause for a few seconds to let the results load
    time.sleep(2)

# Keep the browser open for 10 seconds before closing
time.sleep(10)
driver.quit()
